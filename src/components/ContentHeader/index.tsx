import React from 'react';
import { Container, TitleContainer, Controllers } from './styles';

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children?: React.ReactNode;
}
const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  children,
  lineColor,
}) => {
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h3>{title}</h3>
      </TitleContainer>
      <Controllers>{children}</Controllers>
    </Container>
  );
};
export default ContentHeader;