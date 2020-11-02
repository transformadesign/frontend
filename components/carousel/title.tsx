import React from 'react';

import { classNames } from '../../lib/class-names';

import styles from './title.module.css';

const Title: React.FC = ({ children }) => {
    return (
        <h2
            className={classNames(
                styles.title,
                'px-2 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none md:text-left'
            )}
        >
            {children}
        </h2>
    );
};

export default Title;
