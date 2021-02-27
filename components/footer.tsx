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
        return [{
            url: config?.instagram?.url,
            target: config?.instagram?.target,
            service: 'Instagram'
        }, {
            url: config?.pinterest?.url,
            target: config?.pinterest?.target,
            service: 'Pinterest'
        }].reduce((result, elem) => {
            if (elem.url) {
                result.push(
                    <a
                        className="border-r border-black"
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

    return (
        <Container as="footer" className="mb-8">
            <div className="max-w-66p flex flex-row border-t border-r border-l border-black items-stretch text-center">
                <div className="text-5xl tracking-tighter border-b border-black" style={{ width: '80px' }}>TF</div>
                <div className="flex flex-col flex-grow text-xxs border-l border-black">
                    <div className={classNames('border-b border-black text-left flex items-center content-center px-2 py-1', footer.row)}>{RichText.asText(config?.legalNotice || [])}</div>
                    <div className={classNames('flex flex-row items-stretch', footer.row, footer.celled)}>
                        <div className="flex-grow">Privacy Notice</div>
                        <div className="flex-grow">Terms of use</div>
                        {socials.length ? socials : null}
                        <div className={classNames('flex-grow', footer.spaced)}>{
                            RichText.asText(config?.copyright || []).
                            replace('%year', new Date().getFullYear().toString())
                        }</div>
                        <LangSwitcher className="uppercase leading-none justify-self-end" />
                    </div>
                </div>
            </div>
        </Container>
    );
}
