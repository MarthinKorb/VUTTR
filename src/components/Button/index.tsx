import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

interface IButtonProps {
  openModal: () => void;
}

const Button: React.FC<IButtonProps> = ({ openModal }) => (
  <Container>
    <button type="button" onClick={openModal}>
      <div className="text">Add a New Tool</div>
      <div className="icon">
        <FiPlusSquare size={24} />
      </div>
    </button>
  </Container>
);

export default Button;
