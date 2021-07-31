import { createContext } from 'react';

import { I18NProps } from '@pages/_app';

const I18nCtx = createContext<I18NProps>({
    now: Date.now(),
    messages: {}
});

export default I18nCtx;
