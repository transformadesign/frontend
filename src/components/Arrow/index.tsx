import React from 'react';

import { classNames } from '@lib/classNames';

import styles from './Arrow.module.css';

const Arrow: React.FC<{ className?: string }> = ({ className }) => (
    <i className={classNames(styles.arrow, className, 'block relative h-px my-8 mx-0')} />
);

export default Arrow;
