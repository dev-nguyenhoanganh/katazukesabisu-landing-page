export const fCurrency = (number = 0): string => {
  return new Intl.NumberFormat('ja-JP').format(number) + '円～';
};
