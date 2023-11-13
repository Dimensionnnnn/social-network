export const isDateCorrect = (date: Date) => {
  return date <= new Date() && date >= new Date(1900, 0, 1);
};
