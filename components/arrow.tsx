import React from 'react';

import { classNames } from '../lib/class-names';

import styles from './arrow.module.css';

const Arrow: React.FC<{ className?: string }> = ({ className }) => {
    return <i className={classNames(styles.arrow, className)} />;
}

export default Arrow;
