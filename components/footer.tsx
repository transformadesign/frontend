import { useContext, useMemo } from 'react';
import { RichText } from 'prismic-reactjs';

import { Context } from '../context/main';
import { classNames } from '../lib/class-names';

import Container from './container';
import LangSwitcher from './lang-switcher';

import social from './social.module.css';
import footer from './footer.module.css';

export default function Footer() {
    const { config } = useContext(Context);

    const socials = useMemo(() => {
        return [
            {
                url: config?.instagram?.url,
                target: config?.instagram?.target,
                service: 'Instagram'
            },
            {
                url: config?.pinterest?.url,
                target: config?.pinterest?.target,
                service: 'Pinterest'
            }
        ].reduce((result, elem) => {
            if (elem.url) {
                result.push(
                    <a
                        className="border-l border-black flex"
                        href={elem.url}
                        rel="nofollow"
                        target={elem.target}
                        title={elem.service}
                        key={elem.service}
                    >
                        <i className={classNames(social.link, social[elem.service.toLocaleLowerCase()], 'block')} />
                    </a>
                );
            }

            return result;
        }, []);
    }, [config?.instagram?.url, config?.pinterest?.url]);

    const copyright = config?.copyright
        ? RichText.asText(config.copyright).replace('%year', new Date().getFullYear().toString())
        : '';

    return (
        <Container as="footer" className="mb-8">
            <div className="sm:max-w-66p flex flex-row border-t border-r border-l border-black items-stretch text-center">
                <div
                    aria-hidden="true"
                    className={classNames(
                        'text-5xl tracking-tighter border-b border-black flex items-center content-center justify-center py-4 px-1 sm:px-2',
                        footer.logo
                    )}
                >
                    <img src="/logo.svg" width="35" height="44" alt="" />
                </div>
                <div className="flex flex-col flex-grow text-xxs border-l border-black">
                    <div
                        className={classNames(
                            'border-b border-black text-left flex items-center content-center px-2 py-1',
                            footer.row
                        )}
                    >
                        {RichText.asText(config?.legalNotice || [])}
                    </div>
                    <div className={classNames('flex flex-row items-stretch', footer.row, footer.celled)}>
                        <div className="flex flex-grow">Privacy Notice</div>
                        <div className="flex flex-grow border-l">Terms of use</div>
                        {socials.length ? socials : null}
                        <div className={classNames('flex-grow hidden sm:flex border-l', footer.spaced)}>
                            {copyright}
                        </div>
                        <LangSwitcher className="uppercase leading-none hidden sm:flex border-l" />
                    </div>
                </div>
            </div>
            <div className="sm:hidden text-center px-2 pt-4 text-xxs uppercase">{copyright}</div>
        </Container>
    );
}
