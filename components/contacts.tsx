import React, { useCallback } from 'react';

import { formatPhone } from '../lib/formatPhone';
import { Config } from '../lib/api';

import Heading from './heading';

type Props = {
    className?: string;
    config: Config;
};

const Contacts: React.FC<Props> = ({ config }) => {
    const getBlock = useCallback(
        (title: string, content: (JSX.Element | string)[]) => {
            if (!content || !content.length) return null;

            return (
                <div className="flex-1 pr-12 mb-7">
                    <Heading level="4" className="uppercase mb-6">
                        {title}
                    </Heading>
                    {content.map((elem, i) => (
                        <div key={i}>{elem}</div>
                    ))}
                </div>
            );
        },
        [config]
    );

    if (!config) {
        return null;
    }

    return (
        <div className="py-8 mt-6 flex flex-col sm:flex-row container">
            <a id="contact" className="invisible">
                Contact
            </a>
            {getBlock(
                'Address',
                config?.addresses?.map((elem) => <div key={elem.address}>{elem.address}</div>)
            )}
            {getBlock(
                'Contact us',
                config?.phones?.map(({ phone }) => (
                    <a key={phone} href={`tel:+${phone}`}>
                        {formatPhone(phone)}
                    </a>
                ))
            )}
            {getBlock(
                "Let's work with us",
                config?.email.url && [
                    <a key={config.email.url} target={config.email.target} href={config.email.url}>
                        {config.email.url.replace(/^mailto:/, '')}
                    </a>
                ]
            )}
        </div>
    );
};

export default Contacts;
