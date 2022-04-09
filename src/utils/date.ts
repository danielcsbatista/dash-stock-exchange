export const formatDate = (date: string): string => {
  const dateFormatted = new Date(date);
  const formatter = new Intl.DateTimeFormat('pt-br', {
    timeZone: 'UTC',
  });
  return formatter.format(dateFormatted);
};
