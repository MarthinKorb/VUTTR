import React, { useRef, useCallback } from 'react';

import { FiCheckSquare, FiEdit3 } from 'react-icons/fi';
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

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateTool: (tool: Omit<ITools, 'id' | 'available'>) => void;
  editingTool: ITools;
}

interface IEditToolsData {
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
}

const ModalEditTool: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingTool,
  handleUpdateTool,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditToolsData) => {
      const { title, description, link } = data;
      const arrayTags = data.tags.toString();

      const tags = arrayTags.split(',');

      handleUpdateTool({
        title,
        description,
        link,
        tags,
      });
      setIsOpen();
    },
    [handleUpdateTool, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingTool}>
        <h1>
          {' '}
          <FiEdit3
            size={24}
            style={{
              marginRight: '12px',
            }}
          />
          Edit Tool
        </h1>
        <label htmlFor="title">Tool Name</label>
        <Input name="title" placeholder="Tool name" />

        <label htmlFor="link">Tool Link</label>
        <Input name="link" placeholder="Link" />

        <label htmlFor="description">Tool Description</label>
        <Input name="description" placeholder="Description" />

        <label htmlFor="tags">Tags</label>
        <Input name="tags" placeholder="Tags" />

        <button type="submit" data-testid="edit-tool-button">
          <div className="text">Edit Tool</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditTool;
