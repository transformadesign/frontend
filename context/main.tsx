import { createContext } from 'react';
import { defaultLanguage, Lang, Locale } from '../lib/i18n';
import { Config } from '../lib/api';
import { Page } from '../types/pages';

export type Context = {
    config: Config;
    lang: Lang;
    type: Page;
    alternates: {
        uid: string;
        lang: Locale;
    }[];
};

export const Context = createContext({
    config: null,
    lang: defaultLanguage,
    type: 'main',
    alternates: []
} as Context);
