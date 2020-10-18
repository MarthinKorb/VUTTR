import React from 'react';

import { Container } from './styles';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => (
  <Container>
    <header>
      <h1>VUTTR</h1>
      <h2>Very Usefull Tools to Remember</h2>
    </header>
  </Container>
);

export default Header;
