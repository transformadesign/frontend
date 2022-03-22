import { createContext } from 'react';

const ConfigCtx = createContext({
    socials: [
        { name: 'Pinterest', url: 'https://www.pinterest.ru/studiodvoesrl/' },
    ]
});

export default ConfigCtx;
