import { useContext, useMemo } from 'react';
import Image from 'next/image';

import ConfigCtx from '@ctx/config'
import { classNames } from '@lib/classNames';
import useI18N from '@hooks/useI18N';
import logo from '@pub/logo.svg';
import Container from '@cmp/Container';
import Contact from '@cmp/Contact';

import social from './Social.module.css';
import footer from './Footer.module.css';

export default function Footer({ hideContacts }: { hideContacts?: boolean; }) {
    const { socials: socialsConf } = useContext(ConfigCtx);
    const { messages: { footer: footerI18N } } = useI18N();

    const socials = useMemo(
        () =>
            socialsConf.reduce((result, elem) => {
                if (elem.url) {
                    result.push(
                        <a
                            className="border-l border-black flex"
                            href={elem.url}
                            rel="nofollow noreferrer"
                            target="_blank"
                            title={elem.name}
                            key={elem.name}
                        >
                            <i className={classNames(social.link, social[elem.name.toLocaleLowerCase()], 'block')} />
                        </a>
                    );
                }

                return result;
            }, []),
        [socialsConf]
    );

    const copyright = footerI18N.copyright.replace('%year', new Date().getFullYear().toString());

    return (
        <div>
            {!hideContacts && <Contact />}
            <Container as="footer" className="mb-8 max-w-screen-lg mx-auto">
                <div className="sm:max-w-66p flex flex-row border-t border-r border-l border-black items-stretch text-center mt-12">
                    <div
                        aria-hidden="true"
                        className={classNames(
                            'text-5xl tracking-tighter border-b border-black flex items-center content-center justify-center py-4 px-1 sm:px-2',
                            footer.logo
                        )}
                    >
                        <Image src={logo} width={35} height={44} alt="" />
                    </div>
                    <div className="flex flex-col flex-grow text-xxs border-l border-black">
                        <div
                            className={classNames(
                                'border-b border-black text-left flex items-center content-center px-2 py-1',
                                footer.row
                            )}
                        >
                            {footerI18N.legalNotice}
                        </div>
                        <div className={classNames('flex flex-row items-stretch', footer.row, footer.celled)}>
                            <div className="flex flex-grow">Privacy Notice</div>
                            <div className="flex flex-grow border-l">Terms of use</div>
                            {socials.length ? socials : null}
                        </div>
                    </div>
                </div>
                <div className="sm:hidden text-center px-2 pt-4 text-xxs uppercase">{copyright}</div>
            </Container>
        </div>
    );
}
