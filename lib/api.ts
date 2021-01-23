import Prismic from 'prismic-javascript';
import { RichTextBlock } from 'prismic-reactjs';
import { Locale } from './i18n';

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const API_TOKEN = process.env.PRISMIC_API_TOKEN;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;

export const PrismicClient = Prismic.client(REF_API_URL, {
    accessToken: API_TOKEN
});

export type PreviewData = { ref: string };
export type Variables = {
    locale: Locale;
    [key: string]: undefined | string | number | boolean;
};
type FetchAPIOpts = Partial<{
    previewData: PreviewData;
    variables: Variables;
}>;

async function fetchAPI(query: string, { previewData, variables }: FetchAPIOpts = {}): Promise<any> {
    const prismicAPI = await PrismicClient.getApi();
    const res = await fetch(`${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`, {
        headers: {
            'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
            'Content-Type': 'application/json',
            Authorization: `Token ${API_TOKEN}`
        }
    });

    if (res.status !== 200) {
        console.log(await res.text());
        throw new Error('Failed to fetch API');
    }

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}

type DocMeta = {
    uid: string;
    lang: Locale;
    alternateLanguages: {
        uid: string;
        lang: Locale;
    }[];
};

type Image = {
    dimensions: {
        width: number;
        height: number;
    };
    alt: string | null;
    copyright: string | null;
    url: string;
};

export type Main = {
    _meta: DocMeta;
    interval?: number;
    fields?: {
        image: Image | null;
        media?: {
            url: string;
            name: string;
            size: number;
        };
        slide_interval?: number;
        embed: null;
        foreignTitle: RichTextBlock[];
        mainTitle: RichTextBlock[];
        description: RichTextBlock[];
        thumbName: RichTextBlock[];
        active: boolean;
    }[];
};
export async function getMain(previewData: PreviewData, variables: Variables): Promise<Main> {
    const data = await fetchAPI(
        `
    query($locale: String!) {
      allMaincarousels(lang: $locale) {
        edges {
          node {
            interval,
            body {
              ... on MaincarouselBodySlide {
                fields {
                  image,
                  media {
                    ...on _FileLink{
                      url,
                      name,
                      size
                    }
                  },
                  slide_interval,
                  embed,
                  foreignTitle,
                  mainTitle,
                  description,
                  thumbName,
                  active
                }
              }
            }
            _meta {
              uid
              lang
              alternateLanguages {
                uid
                lang
              } 
            }
          }
        }
      }
    }
  `,
        { previewData, variables }
    );

    const inner = (data?.allMaincarousels?.edges || [])[0]?.node;
    const content = (inner?.body || [])[0]?.fields || [];

    return {
        _meta: inner._meta,
        interval: inner?.interval,
        fields: content
    };
}
