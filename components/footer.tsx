import { useContext, Fragment } from 'react';
import Link from 'next/link';

import { Context } from '../context/main';
import { languages, languageContentMap } from '../lib/i18n';
import { buildUrl } from '../lib/url-builder';
import { classNames } from '../lib/class-names';
import social from './social.module.css';

export default function Footer() {
    const { lang, alternates, type } = useContext(Context);
    const alts = alternates.reduce(
        (result, { uid, lang: locale }) => ({
            ...result,
            [languageContentMap[locale]]: uid
        }),
        {}
    );

    return (
        <footer className="bg-accent-1 border-t border-accent-2">
            <div className="py-5 px-5 flex flex-col items-center justify-center lg:justify-between lg:flex-row-reverse">
                {/*<div className="py-5">
                    <a
                        className={classNames(social.link, social.instagram, 'mx-3')}
                        href="https://instagram.com"
                        rel="nofollow"
                        target="_blank"
                        title="Instagram"
                    ></a>
                    <a
                        className={classNames(social.link, social.whatsapp, 'mx-3')}
                        href="https://whatsapp.com"
                        rel="nofollow"
                        target="_blank"
                        title="Whatsapp"
                    ></a>
                </div>*/}
                <div className="flex flex-col items-center lg:items-start">
                    <div>&copy; Transforma {new Date().getFullYear()}</div>
                    <div>
                        <span className=" font-bold">{lang}&nbsp;</span>
                        {languages.reduce((result, otherLang) => {
                            if (otherLang !== lang) {
                                const alt = alts[otherLang];

                                result.push(
                                    <Fragment key={otherLang}>
                                        <Link {...buildUrl(type, otherLang, { uid: alt })}>
                                            <a className="hover:underline">{otherLang}</a>
                                        </Link>
                                        &nbsp;
                                    </Fragment>
                                );
                            }

                            return result;
                        }, [])}
                    </div>
                </div>
            </div>
        </footer>
    );
}
