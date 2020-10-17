import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';
import api from '../../services/api';

interface ITools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
}

interface IProps {
  tool: ITools;
  handleDelete: (id: number) => {};
  handleEditTool: (tool: ITools) => void;
}

const Tool: React.FC<IProps> = ({
  tool,
  handleDelete,
  handleEditTool,
}: IProps) => {
  function setEditingTool(): void {
    handleEditTool(tool);
  }

  return (
    <Container>
      <section className="body">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => setEditingTool()}
            data-testid={`edit-tool-${tool.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(tool.id)}
            data-testid={`remove-tool-${tool.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="main-content">
          <h2>{tool.title}</h2>
          <p>{tool.description}</p>

          <p className="tags">
            {tool.tags.map(tag => {
              return (
                <>
                  <b>#{tag}</b>{' '}
                </>
              );
            })}
          </p>
        </div>
      </section>
      <section className="footer" />
    </Container>
  );
};

export default Tool;
