import React from 'react';

import Heading from '@cmp/Heading';
import Container from '@cmp/Container';
import { leadZero } from '@lib/leadZero';
import { classNames } from '@lib/classNames';

import styles from './Info.module.css';

type Props = {
    data: {
        title?: string;
        subTitle?: string;
        description?: string;
        items?: Array<{
            title?: string;
            text?: string;
        }>
    };
    showItemNumber?: boolean;
}

const Info: React.FC<Props> = ({ data, showItemNumber, children }) => {
    return (
        <Container as="section" className="mb-20">
            <div className="text-center mb-10">
                {data.title && <Heading level="4">{data.title}</Heading>}
                {data.subTitle && <Heading level="2">{data.subTitle}</Heading>}
                {data.description && <p>{data.description}</p>}
            </div>
            <div className="flex flex-wrap flex-col sm:flex-row">
                {
                    data.items?.map((item, index) => (
                        <article key={index} className="flex-quad mb-6 sm:pr-2">
                            <div className="text-center relative my-6">
                                {showItemNumber && (
                                    <div
                                        className={
                                            classNames(
                                                'font-light text-gray-100 text-6xl',
                                                'absolute w-full text-center',
                                                styles.number
                                            )
                                        }
                                    >
                                        {leadZero(index + 1)}
                                    </div>
                                )}
                                <Heading level="3" className="uppercase">{item.title}</Heading>
                            </div>
                            <p>{item.text}</p>
                        </article>
                    ))
                }
                {children}
            </div>
        </Container>
    );
}

export default Info;
