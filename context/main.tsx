import { createContext } from 'react';
import { defaultLanguage, Lang, Locale } from '../lib/i18n';
import { Page } from '../types/pages';

export type Context = {
    lang: Lang;
    type: Page;
    alternates: {
        uid: string;
        lang: Locale;
    }[];
};

export const Context = createContext({
    lang: defaultLanguage,
    type: 'main',
    alternates: []
} as Context);
