import React, { useMemo } from 'react';

import { classNames } from '@lib/classNames';
import Container from '@cmp/Container';

type Props = {
    data: {
        text?: Array<string>;
    };
    className?: string;
    preset?: 'image' | 'color';
}

const Cut: React.FC<Props> = ({ data, className, preset}) => {
    const layout = useMemo(() => {
        if (preset === 'color') {
            return {
                fontSize: 'text-2xl',
                sectionCn: 'bg-gray-900'
            };
        }

        return {
            fontSize: 'text-3xl font-light',
            containerCn: 'bg-gray-700'
        };
    }, [preset]);

    return (
        <section className={classNames('mb-14 sm:pb-24 pb-0 text-white', layout.fontSize, layout.sectionCn, className)}>
            <Container className={classNames('pt-8 pb-24 mb-8 box-content sm:px-12 px-0', layout.containerCn)}>
                {
                    data.text.map((text, index) => (
                        <p key={index} className="pt-4 sm:mr-40 mr-0 px-3">{text}</p>
                    ))
                }
            </Container>
        </section>
    );
}

export default Cut;
