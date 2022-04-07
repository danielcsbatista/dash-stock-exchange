import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

const List: React.FC = () => {
  const { pathname } = useLocation();

  const title = useMemo(() => {
    return pathname.includes('entry-balance')
      ? { name: 'Entradas', lineColor: '#F7931B' }
      : { name: 'Saídas', lineColor: '#E44C4E' };
  }, [pathname]);
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((card) => (
          <HistoryFinanceCard
            key={card}
            tagColor='#E44C4E'
            title={`Salário ${card}`}
            subTitle={'28/02/2022'}
            amount='R$ 1.000,00'
          />
        ))}
      </Content>
    </Container>
  );
};
export default List;
