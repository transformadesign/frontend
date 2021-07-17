import React from 'react';

import { classNames } from '../../../lib/class-names';
import Container from '../../container';

type Props = {
    className?: string;
};

const Progress: React.FC<Props> = ({ className, children }) => (
    <div className={classNames(className, 'w-full')} aria-hidden="true">
        <Container className="flex flex-row">{children}</Container>
    </div>
);

export default Progress;
