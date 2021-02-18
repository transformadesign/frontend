import { useContext, Fragment, useMemo } from 'react';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';

import { Context } from '../context/main';
import { languages, languageContentMap } from '../lib/i18n';
import { buildUrl } from '../lib/url-builder';
import { classNames } from '../lib/class-names';
import Container from './container';

import social from './social.module.css';

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
                        className={classNames(social.link, social[elem.service.toLocaleLowerCase()], 'mx-3')}
                        href={elem.url}
                        rel="nofollow"
                        target={elem.target}
                        title={elem.service}
                        key={elem.service}
                    />
                );
            }

            return result;
        }, []);
    }, [config?.instagram?.url, config?.pinterest?.url]);

    return (
        <Container as="footer">
            <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row-reverse">
                {RichText.asText(config?.legalNotice || [])}
                {socials.length ? socials : null}
                <div className="flex flex-col items-center lg:items-start">
                    <div>{
                        RichText.asText(config?.copyright || []).
                        replace('%year', new Date().getFullYear().toString())
                    }</div>
                </div>
            </div>
        </Container>
    );
}
