export const validatePhone = (phone: string) => /^(\+38|38)?0\d{9}$/.test(phone.replace(/\s/g, ''));
