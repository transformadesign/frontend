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
            fontSize: 'text-xl',
            containerCn: 'bg-gray-900'
        };
    }, [preset]);

    return (
        <section className={classNames('mb-14 py-20 pb-24 text-white', layout.fontSize, layout.sectionCn, className)}>
            <Container className={classNames('pt-2 pb-6 mb-8', layout.containerCn)}>
            {
                data.text.map((text, index) => (
                    <p key={index} className="pt-4">{text}</p>
                ))
            }
            </Container>
        </section>
    );
}

export default Cut;
