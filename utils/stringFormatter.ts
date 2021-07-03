export const formatCurrency = (value: string): string =>
  new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(value));
