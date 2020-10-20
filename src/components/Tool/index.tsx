import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

interface ITools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
}

interface IProps {
  tool: ITools;
  handleEditTool: (tool: ITools) => void;
  isSelectedTag: string;
  handleOpenDeleteModal: (id: number) => void;
}

const Tool: React.FC<IProps> = ({
  tool,
  handleEditTool,
  isSelectedTag,
  handleOpenDeleteModal,
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
            id="icon-delete"
            type="button"
            className="icon"
            onClick={() => handleOpenDeleteModal(tool.id)}
            data-testid={`remove-tool-${tool.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="main-content">
          <h2>{tool.title}</h2>
          <p>{tool.description}</p>
          <br />
          <a target="_blank" href={tool.link}>
            {tool.link}
          </a>

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
