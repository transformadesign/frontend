import React from 'react';

import { classNames } from '../../../lib/class-names';

type Props = {
    className?: string;
};

const Progress: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={classNames(className, 'flex flex-row px-1')}>
            {children}
        </div>
    );
};

export default Progress;
