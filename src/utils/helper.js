import { format } from 'date-fns';

export const formatCurrency = (value) =>
    new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
      value
    );


 

export const formatISODate = (isoDate, dateFormat = 'yyyy-MM-dd') => {
  try {
    return format(new Date(isoDate), dateFormat);
  } catch (error) {
    console.error('Invalid date format:', error);
    return null;
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();

  // Determine the correct suffix
  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th";

  return `Monthly - ${day}${suffix}`;
};
