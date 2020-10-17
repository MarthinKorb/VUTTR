import React, { useRef, useCallback } from 'react';

import { FiCheckSquare, FiPlusSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface ITools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
}

interface ICreateToolData {
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
  // available: boolean;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTool: (tool: Omit<ITools, 'id' | 'available'>) => void;
}

const ModalAddTool: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddTool,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateToolData) => {
      const { title, description, link } = data;
      const arrayTags = data.tags.toString();

      const tags = arrayTags.split(',');
      handleAddTool({
        title,
        description,
        link,
        tags,
      });
      // console.log(data);
      setIsOpen();
    },
    [handleAddTool, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>
          <FiPlusSquare size={24} style={{ marginRight: '10px' }} />
          Add a New Tool
        </h1>
        <label htmlFor="title">Tool Name</label>
        <Input name="title" />

        <label htmlFor="link">Tool Link</label>
        <Input name="link" />

        <label htmlFor="description">Tool Description</label>
        <Input name="description" />

        <label htmlFor="tags">Tags</label>
        <Input name="tags" />

        <button type="submit" data-testid="add-tool-button">
          <p className="text">Add Tool</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddTool;
