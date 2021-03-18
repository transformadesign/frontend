import { useContext, FC, Fragment } from 'react';
import Link from 'next/link';

import { Context } from '../context/main';
import { buildUrl } from '../lib/url-builder';
import { languageContentMap, languages } from '../lib/i18n';

type Props = {
    className?: string;
};

const LangSwitcher: FC<Props> = (props) => {
    const { lang, alternates, type } = useContext(Context);
    const alts = alternates.reduce(
        (result, { uid, lang: locale }) => ({
            ...result,
            [languageContentMap[locale]]: uid
        }),
        {}
    );
    return (
        <>
            {languages.reduce((result, otherLang) => {
                if (otherLang !== lang) {
                    const alt = alts[otherLang];

                    result.push(
                        <Fragment key={otherLang}>
                            <Link {...buildUrl(type, otherLang, { uid: alt })}>
                                <a className={props.className}>{otherLang}</a>
                            </Link>
                        </Fragment>
                    );
                }

                return result;
            }, [])}
        </>
    );
};

export default LangSwitcher;
