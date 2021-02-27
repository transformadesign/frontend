import React from 'react';

import { classNames } from '../lib/class-names';

import styles from './arrow.module.css';

const Arrow: React.FC<{ className?: string }> = ({ className }) => {
    return <i className={classNames(styles.arrow, className, 'block relative h-px my-8 mx-0')} />;
}

export default Arrow;
