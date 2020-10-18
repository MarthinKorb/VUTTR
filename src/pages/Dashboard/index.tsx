import React, { useState, useEffect } from 'react';

import { FiSearch } from 'react-icons/fi';
import Header from '../../components/Header';

import api from '../../services/api';

import Tool from '../../components/Tool';
import ModalAddTool from '../../components/ModalAddTool';
import ModalEditTool from '../../components/ModalEditTool';

import { ToolsContainer } from './styles';
import Button from '../../components/Button';

interface ITools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
}

const Dashboard: React.FC = () => {
  const [tools, setTools] = useState<ITools[]>([]);
  const [editingTool, setEditingTool] = useState<ITools>({} as ITools);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadTools(): Promise<void> {
      const response = await api.get('/tools');
      setTools(response.data);
      console.log(response.data);
    }

    loadTools();
  }, []);

  async function handleAddTool(
    tool: Omit<ITools, 'id' | 'available'>,
  ): Promise<void> {
    try {
      const response = await api.post('/tools', {
        ...tool,
        available: true,
      });
      setTools([...tools, response.data]);
      console.log([...tools, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateTool(
    tool: Omit<ITools, 'id' | 'available'>,
  ): Promise<void> {
    try {
      const response = await api.put(`/tools/${editingTool.id}`, {
        ...editingTool,
        ...tool,
      });

      setTools(
        tools.map(mappedTool =>
          mappedTool.id === editingTool.id ? { ...response.data } : mappedTool,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteTool(id: number): Promise<void> {
    try {
      await api.delete(`/tools/${id}`);

      setTools(tools.filter(tool => tool.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditTool(tool: ITools): void {
    setEditingTool(tool);
    toggleEditModal();
  }

  return (
    <>
      <ModalAddTool
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddTool={handleAddTool}
      />
      <ModalEditTool
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingTool={editingTool}
        handleUpdateTool={handleUpdateTool}
      />

      <ToolsContainer data-testid="tools-list">
        <Header openModal={toggleModal} />
        <div className="button-add-new">
          <div className="input-container">
            <FiSearch />
            <input name="search" placeholder="Search" />
          </div>
          <Button openModal={toggleModal} />
        </div>
        {tools &&
          tools.map(tool => (
            <Tool
              key={tool.id}
              tool={tool}
              handleDelete={handleDeleteTool}
              handleEditTool={handleEditTool}
            />
          ))}
      </ToolsContainer>
    </>
  );
};

export default Dashboard;
