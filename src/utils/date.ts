export const formatDate = (date: string): string => {
  const dateFormatted = new Date(date);
  const formatter = new Intl.DateTimeFormat('pt-br', {
    timeZone: 'UTC',
  });
  return formatter.format(dateFormatted);
};

export enum NameMonth {
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
}

export const filterDate = (list: any, type: 'year' | 'month'): number[] => {
  let unique: number[] = [];
  list.forEach((item: any) => {
    const date = new Date(item.date);
    const period = type === 'year' ? date.getFullYear() : date.getMonth();
    if (!unique.includes(period)) unique.push(period);
  });
  return unique.sort();
};
