import { createContext } from 'react';

const ConfigCtx = createContext({
    socials: [
        { name: 'Instagram', url: 'https://www.instagram.com/transforma.design/' },
        { name: 'Pinterest', url: 'https://www.pinterest.ru/studiodvoesrl/_saved/' },
    ]
});

export default ConfigCtx;
