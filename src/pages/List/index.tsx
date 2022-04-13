import React, { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import { filterDate, formatDate, NameMonth } from '../../utils/date';

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState<IData[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>(
    String(new Date().getMonth() + 1),
  );
  const [selectedYear, setSelectedYear] = useState<string>('');

  const title = useMemo(() => {
    return pathname.includes('entry-balance')
      ? { name: 'Entradas', lineColor: '#F7931B' }
      : { name: 'Saídas', lineColor: '#E44C4E' };
  }, [pathname]);

  const listData = useMemo(() => {
    return pathname.includes('entry-balance') ? gains : expenses;
  }, [pathname]);

  useEffect(() => {
    const filteredData = listData.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());
      return month === selectedMonth && year === selectedYear;
    });

    const mapList = filteredData.map((item) => {
      return {
        id: String(new Date().getTime() + item.amount),
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#E44C4E',
      };
    });
    setData(mapList);
  }, [listData, selectedMonth, selectedYear]);

  const months = useMemo(() => {
    const uniqueMonth = filterDate(listData, 'month');
    setSelectedYear(uniqueMonth[0].toString());
    return uniqueMonth.map((item) => {
      return {
        label: NameMonth[item],
        value: item,
      };
    });
  }, [listData]);

  const years = useMemo(() => {
    const uniqueYears = filterDate(listData, 'year');
    setSelectedYear(uniqueYears[0].toString());
    return uniqueYears.map((item) => {
      return {
        label: String(item),
        value: item,
      };
    });
  }, [listData]);

  return (
    <Container>
      <ContentHeader title={title.name} lineColor={title.lineColor}>
        <SelectInput
          options={months}
          onChange={(event) => setSelectedMonth(event.target.value)}
          defaultValue={selectedMonth}
        />
        <SelectInput
          options={years}
          onChange={(event) => setSelectedYear(event.target.value)}
          defaultValue={selectedYear}
        />
      </ContentHeader>

      <Filters>
        <button type='button' className='tag-filter tag-filter-recurrent'>
          Recorrentes
        </button>

        <button type='button' className='tag-filter tag-filter-eventual'>
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.map((card) => (
          <HistoryFinanceCard
            key={card.id}
            tagColor={card.tagColor}
            title={card.description}
            subTitle={card.dateFormatted}
            amount={formatCurrency(card.amountFormatted)}
          />
        ))}
      </Content>
    </Container>
  );
};
export default List;
