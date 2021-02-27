import { useContext, FC, Fragment } from 'react';

import { Context } from '../context/main';
import { buildUrl } from '../lib/url-builder';
import { languageContentMap, languages } from '../lib/i18n';

type Props = {
    className?: string;
};

const LangSwitcher: FC<Props> = props => {
    const { lang, alternates, type, config } = useContext(Context);
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
                            {/*<Link {...buildUrl(type, otherLang, { uid: alt })}>
                                <a className="hover:underline">{otherLang}</a>
                            </Link>*/}
                            <a className={props.className} href={buildUrl(type, otherLang, { uid: alt }).as}>
                                {otherLang}
                            </a>
                        </Fragment>
                    );
                }

                return result;
            }, [])}
        </>
    );
};

export default LangSwitcher;
