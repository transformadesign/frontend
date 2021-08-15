import React, { useCallback } from 'react';

import { formatPhone } from '@lib/formatPhone';

import Heading from '@cmp/Heading';
import Container from '@cmp/Container';
import useI18N from '@hooks/useI18N';

const Contact: React.FC = () => {
    const { messages: { contacts } } = useI18N();
    const getBlock = useCallback(
        (title: string, content: (JSX.Element | string)[]) => {
            if (!content || !content.length) return null;

            return (
                <div className="flex-trio pr-12 mb-6 last:pr-0">
                    <Heading level="4">
                        {title}
                    </Heading>
                    {content.map((elem, i) => (
                        <div className="mb-3 sm:mb-7" key={i}>{elem}</div>
                    ))}
                </div>
            );
        },
        []
    );

    if (!contacts) {
        return null;
    }

    return (
        <>
            <a id="contact" className="invisible" />
            <Container as="section" className="mb-8 mt-6 flex flex-col sm:flex-row">
                {getBlock(
                    contacts.addressTitle,
                    contacts.addresses.map(({ val }) => <div key={val}>{val}</div>)
                )}
                {getBlock(
                    contacts.phoneTitle,
                    contacts.phones.map(({ val }) => (
                        <a key={val} href={`tel:+${val}`}>
                            {formatPhone(val)}
                        </a>
                    ))
                )}
                {getBlock(
                    contacts.emailTitle,
                    contacts.emails.map(({ val }) => (
                        <a key={val} target="_blank" href={val} rel="noreferrer">
                            {val.replace(/^mailto:/, '')}
                        </a>
                    ))
                )}
            </Container>
        </>
    );
};

export default Contact;
