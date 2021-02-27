import React, { useCallback } from 'react';

import { formatPhone } from '../lib/formatPhone';
import { Config } from '../lib/api';

import Container from './container';
import Heading from './heading';

type Props = {
    className?: string;
    config: Config;
};

const Contacts: React.FC<Props> = ({ className, config }) => {
    const getBlock = useCallback((title: string, content: (JSX.Element | string)[]) => {
        if (!content || !content.length) return null;

        return (
            <div className="flex-1 pr-12 mb-7">
                <Heading level="4" className="uppercase mb-6">{title}</Heading>
                {content.map((elem, i) => (
                    <div key={i}>{elem}</div>
                ))}
            </div>
        );
    }, [config]);

    if (!config) {
        return null;
    }

    return (
        <Container className="py-8 flex flex-col sm:flex-row">
            {getBlock('Address', config?.addresses?.map(elem => (
                <div key={elem.address}>{elem.address}</div>
            )))}
            {getBlock('Contact us', config?.phones?.map(({ phone }) => (
                <a key={phone} href={`tel:+${phone}`}>{formatPhone(phone)}</a>
            )))}
            {getBlock('Let\'s work with us', config?.email.url && [(
                <a target={config.email.target} href={config.email.url}>{config.email.url.replace(/^mailto:/, '')}</a>
            )])}
        </Container>
    );
}

export default Contacts;
