export function formatPhone(phone: number) {
    return phone.toString(10).replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3-$4-$5');
}
