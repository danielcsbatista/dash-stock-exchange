import React, { useMemo } from 'react';
import Toggle from '../../components/Toggle';
import { Container, Profile, Welcome, Username } from './styles';
import Emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * Emojis.length);
    return Emojis[index];
  }, []);
  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Bem vindo, {emoji}</Welcome>
        <Username>Lucas</Username>
      </Profile>
    </Container>
  );
};
export default MainHeader;
