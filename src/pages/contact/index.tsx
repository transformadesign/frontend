import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { I18NProps } from '@pages/_app';

import useI18N from '@hooks/useI18N';
import useTitle from '@hooks/useTitle';
import Text from '@cmp/Text';
import Container from '@cmp/Container';
import Heading from '@cmp/Heading';

export default function Contact(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { contact, contacts } } = useI18N();
    const title = useTitle({ title: [contact.page.title] });

    return (
        <>
            {title}
            <Text data={contact.intro} />
            <Container>
                {contact.legal.map((data, i) => (
                    <address key={i} className="not-italic mb-6" itemScope itemType="https://schema.org/Organization">
                        <Heading level="3">{data.name}</Heading>
                        <div>{contact.labelLegal}: <span itemProp="name">{data.legal}</span></div>
                        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <span itemProp="streetAddress">{data.streetAddress}</span>,&nbsp;
                            <span itemProp="postalCode">{data.postalCode}</span>&nbsp;
                            <span itemProp="addressLocality">{data.addressLocality}</span>
                        </div>
                        {data.phone && <div>{contact.labelPhone}: <a href={'tel:' + data.phone.val} itemProp="telephone">+{data.phone.val}</a></div>}
                        {contacts.emails.map(({ val }) => (
                            <a key={val} itemProp="email" className="hidden">{val}</a>
                        ))}
                    </address>
                ))}
                <Heading level="3">{contacts.emailTitle}</Heading>
                {contacts.emails.map(({ val }) => (
                    <a key={val} target="_blank" href={'mailto:' + val} rel="noreferrer" className="text-gray-700">{val}</a>
                ))}
            </Container>
        </>
    );
}

export const getStaticProps: GetStaticProps<I18NProps> = async ({ locale }) => {
    return {
        props: {
            locale,
            messages: {
                ...require(`../../i18n/contact.${locale}`).default
            },
            now: Date.now(),
            hideContacts: true
        }
    }
};
