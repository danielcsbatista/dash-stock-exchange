import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content } from './styles';

const List: React.FC = () => {
  const options = [
    { label: 'Ana', value: 'a' },
    { label: 'Bruno', value: 'b' },
    { label: 'Carlos', value: 'c' },
  ];
  return (
    <Container>
      <ContentHeader title='Saídas' lineColor='#E44C4E'>
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((card) => (
          <HistoryFinanceCard
            cardColor='#313862'
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
