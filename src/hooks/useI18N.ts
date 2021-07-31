import { useContext } from 'react';
import I18nCtx from '@ctx/i18n';

export default function useI18N() {
    return useContext(I18nCtx);
}
