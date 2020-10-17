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
  // available: boolean;
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
  // const [isAvailable, setIsAvailable] = useState(tool.available);

  async function toggleAvailable(): Promise<void> {
    try {
      // TODO UPDATE STATUS (available)
      await api.put(`/tools/${tool.id}`, {
        ...tool,
        // available: !isAvailable,
      });

      // setIsAvailable(!isAvailable);
    } catch (err) {
      console.log(err);
    }
  }

  function setEditingTool(): void {
    handleEditTool(tool);
  }

  return (
    // <Container available={isAvailable}>
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
      <section className="footer">
        <div className="availability-container">
          {/* <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p> */}

          {/* <label htmlFor={`available-switch-${tool.id}`} className="switch">
            <input
              id={`available-switch-${tool.id}`}
              type="checkbox"
              // checked={isAvailable}
              onChange={toggleAvailable}
              data-testid={`change-status-tool-${tool.id}`}
            />
            <span className="slider" />
          </label> */}
        </div>
      </section>
    </Container>
  );
};

export default Tool;
