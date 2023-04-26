export function formatPhone(phone: number) {
    return phone.toString(10).replace(/^(\d{3})(\d{2})(\d{3})(\d+)$/, '+$1 $2 $3 $4');
}
