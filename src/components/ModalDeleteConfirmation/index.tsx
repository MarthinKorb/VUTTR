import React from 'react';

import { FiTrash } from 'react-icons/fi';
import Modal from '../Modal';
import { Container } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  // handleDelete: (id: number) => {};
  deletingTool: any;
}

const ModalDeleteTool: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  async function handleDeleteTool(): Promise<void> {
    console.log('Delete tool');
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <div>
          <h1>
            {' '}
            <FiTrash
              size={24}
              style={{
                marginRight: '12px',
              }}
            />
            Remove Tool
          </h1>
        </div>
        <div className="span-text">
          <span>Are you sure you want to remove this tool?</span>
        </div>
        <div className="buttons-confirmation">
          <Container>
            <button
              id="button-cancel"
              type="button"
              onClick={() => setIsOpen()}
            >
              <div className="text">Cancel</div>
            </button>
          </Container>
          <Container>
            <button type="button" onClick={handleDeleteTool}>
              <div className="text">Yes, remove tool</div>
              <div className="icon">
                <FiTrash size={24} />
              </div>
            </button>
          </Container>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalDeleteTool;
