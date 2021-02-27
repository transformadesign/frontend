import { Config } from './api';

type Phone = Config['phones'][number]['phone'];

export function formatPhone(phone: Phone) {
    return phone ? phone.toString(10).replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3-$4-$5') : '';
}
