import React from 'react';

import { classNames } from '../../lib/class-names';

import styles from './dots.module.css';

export const Dots = ({ scrollSnaps, selectedIndex, scrollTo }) => {
    return (
        <div className={styles.dots}>
            {scrollSnaps.map((_, index) => (
                <button
                    key={index}
                    className={classNames(
                        styles.dot,
                        index === selectedIndex ? styles.isSelected : '',
                        'focus:outline-none'
                    )}
                    type="button"
                    onClick={() => scrollTo(index)}
                />
            ))}
        </div>
    );
};
