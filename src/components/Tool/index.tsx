import React from 'react';

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
  handleDelete: (id: number) => {};
  handleEditTool: (tool: ITools) => void;
  isSelectedTag: string;
}

const Tool: React.FC<IProps> = ({
  tool,
  handleDelete,
  handleEditTool,
  isSelectedTag,
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
            id="icon-delete"
            onClick={() => handleDelete(tool.id)}
            data-testid={`remove-tool-${tool.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="main-content">
          <h2>{tool.title}</h2>
          <p>{tool.description}</p>
          <br />
          <a target="_blank" rel="noreferrer" href={tool.link}>
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
