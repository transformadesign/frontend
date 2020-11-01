import { createContext, useState, useRef, useEffect } from 'react';
import rosetta from 'rosetta';
// import rosetta from 'rosetta/debug';

const i18n = rosetta();

export enum contentLanguageMap {
    en = 'en-us',
    ru = 'ru'
}

export type Lang = 'ru' | 'en';
export type Locale = 'ru' | 'en-us';
export const defaultLanguage = 'ru' as Lang;
export const defaultContentLang = contentLanguageMap[defaultLanguage];
export const languages = Object.keys(contentLanguageMap) as Lang[];
export const contentLanguages = Object.values(contentLanguageMap);
export const languageContentMap = languages.reduce(
    (result, lang) => ({ ...result, [contentLanguageMap[lang]]: lang }),
    {} as Record<Locale, Lang>
);

type I18nWrapper = {
    activeLang: Lang;
    t: typeof i18n.t;
    lang: (lang: Lang, dict?: any) => void;
};

export const I18nContext = createContext({} as I18nWrapper);

// default language
i18n.locale(defaultLanguage);

export default function I18n({ children, lang, langDict }) {
    const [activeDict, setActiveDict] = useState(() => langDict);
    const activeLangRef = useRef(lang || defaultLanguage);
    const [, setTick] = useState(0);
    const firstRender = useRef(true);

    // for initial SSR render
    if (lang && firstRender.current === true) {
        firstRender.current = false;
        i18n.locale(lang);
        i18n.set(lang, activeDict);
    }

    useEffect(() => {
        if (lang) {
            i18n.locale(lang);
            i18n.set(lang, activeDict);
            activeLangRef.current = lang;
            // force rerender
            setTick((tick) => tick + 1);
        }
    }, [lang, activeDict]);

    const i18nWrapper = {
        activeLang: activeLangRef.current,
        t: i18n.t,
        lang: (lang, dict) => {
            i18n.locale(lang);
            activeLangRef.current = lang;
            if (dict) {
                i18n.set(lang, dict);
                setActiveDict(dict);
            } else {
                setTick((tick) => tick + 1);
            }
        }
    };

    return <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>;
}

type StaticProps = <P extends { lang: Lang; [key: string]: any } = { lang: Lang; [key: string]: any }>(
    props: P
) => Promise<{ props: P }>;
export const getStaticI18nProps: StaticProps = async function getStaticI18nProps(props) {
    const lang = props.lang;
    const { default: langDict = {} } = await import(`../langs/${lang}.json`);

    return {
        props: { langDict, ...props, lang }
    };
};

type StaticPathsArgs = {
    fallback?: boolean;
    pathParams?: object[];
    paths?: string[];
};

export function getStaticI18nPaths({ pathParams, paths, fallback = false }: StaticPathsArgs) {
    return {
        paths: languages.reduce((result, lang) => {
            return [
                ...result,
                ...(pathParams
                    ? pathParams.map((params) => ({ params: { lang, ...params } }))
                    : paths.map((path) => `/${lang}${path}`))
            ];
        }, []),
        fallback
    };
}
