import { useContext, FC, Fragment } from 'react';
import Link from 'next/link';

import { Context } from '../context/main';
import { buildUrl } from '../lib/url-builder';
import { languageContentMap, languages } from '../lib/i18n';
import { classNames } from '../lib/class-names';

import Container from './container';

type Props = {
    className?: string;
};

const logoAspectRatio = 76.38 / 229.8;

const Header: FC<Props> = props => {
    const { lang, alternates, type, config } = useContext(Context);
    const alts = alternates.reduce(
        (result, { uid, lang: locale }) => ({
            ...result,
            [languageContentMap[locale]]: uid
        }),
        {}
    );
    const w = 163;
    const h = Math.round(w * logoAspectRatio);
    const containerCn = classNames(props.className, 'flex flex-col xxs:flex-row justify-between items-start')

    return (
        <header className="absolute top-0 pt-24 sm:pt-8 block w-full">
            <Container {...props} className={containerCn}>
                <Link {...buildUrl('main', lang)}>
                    <a className="flex-grow w-full xxs:w-auto pb-4 xxs:p-0">
                        <img src="/logo_large.svg" alt="Transforma" style={{ maxWidth: `${w}px`, maxHeight: `${h}px` }} />
                    </a>
                </Link>
                {languages.reduce((result, otherLang) => {
                    if (otherLang !== lang) {
                        const alt = alts[otherLang];

                        result.push(
                            <Fragment key={otherLang}>
                                {/*<Link {...buildUrl(type, otherLang, { uid: alt })}>
                                    <a className="hover:underline">{otherLang}</a>
                                </Link>*/}
                                <a className="text-white uppercase border border-white p-2 leading-none" href={buildUrl(type, otherLang, { uid: alt }).as}>
                                    {otherLang}
                                </a>
                            </Fragment>
                        );
                    }

                    return result;
                }, [])}
            </Container>
        </header>
    );
};

export default Header;
