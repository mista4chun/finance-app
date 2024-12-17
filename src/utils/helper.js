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