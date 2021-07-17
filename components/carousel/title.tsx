import React from 'react';

const Title: React.FC = ({ children }) => (
    <h2 className="px-2 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none md:text-left absolute top-0 left-0 right-0 bottom-0">
        {children}
    </h2>
);

export default Title;
