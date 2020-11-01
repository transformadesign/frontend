import { LinkProps } from 'next/link';

import { defaultLanguage, Lang } from './i18n';
import { Page } from '../types/pages';

export type Url = Pick<LinkProps, 'as' | 'href'>;

function defaultUrl(lang: Lang = defaultLanguage): Url {
    return {
        as: `/${lang}`,
        href: '/[lang]'
    };
}

export function buildUrl(type: Page = 'main', lang: Lang = defaultLanguage, props?: { uid: string }): Url {
    switch (type) {
        case 'design': {
            if (props?.uid) {
                return {
                    as: `/${lang}/design/${props.uid}`,
                    href: '/[lang]/design/[slug]'
                };
            }

            return defaultUrl(lang);
        }

        case 'main':
        case 'mainpage': {
            return defaultUrl(lang);
        }

        default: {
            const docUrl = props?.uid || type; // repeatable page // single page

            if (docUrl) {
                return {
                    as: `/${lang}/${docUrl}`,
                    href: `/[lang]/${docUrl}`
                };
            }

            return defaultUrl(lang);
        }
    }
}
