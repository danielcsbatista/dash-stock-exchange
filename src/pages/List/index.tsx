import React, { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

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

  const title = useMemo(() => {
    return pathname.includes('entry-balance')
      ? { name: 'Entradas', lineColor: '#F7931B' }
      : { name: 'Saídas', lineColor: '#E44C4E' };
  }, [pathname]);

  useEffect(() => {
    const listData = pathname.includes('entry-balance') ? gains : expenses;
    const mapList = listData.map((item) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dateFormatted: item.date,
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#E44C4E',
      };
    });
    setData(mapList);
  }, []);

  const months = [
    { label: 'julho', value: 7 },
    { label: 'agosto', value: 8 },
    { label: 'setembro', value: 9 },
  ];

  const years = [
    { label: 2020, value: 2020 },
    { label: 2019, value: 2019 },
    { label: 2018, value: 2018 },
  ];

  return (
    <Container>
      <ContentHeader title={title.name} lineColor={title.lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
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
            amount={card.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};
export default List;
