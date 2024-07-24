import { differenceInDays, endOfMonth, startOfMonth, format } from 'date-fns';

export function countDays() {
  const today = new Date();
  const endOfSeptember = endOfMonth(new Date(today.getFullYear(), 8, 1));
  return differenceInDays(endOfSeptember, today);
}