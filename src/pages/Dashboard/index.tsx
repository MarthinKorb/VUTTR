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

  const [search, setSearch] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isTag, setIsTag] = useState(0);
  const [isSelectedTag, setIsSelectedTag] = useState('');

  useEffect(() => {
    async function loadTools(): Promise<void> {
      const response = await api.get('/tools');
      setTools(response.data);
      // console.log(response.data);
    }

    loadTools();
  }, []);

  useEffect(() => {
    async function fetchItems(): Promise<void> {
      if (isChecked) {
        const response = await api.get(`tools?tags_like=${search}`);

        if (response.data[0]) {
          const { tags } = response.data[0];

          const filteredTag = tags.map((tag: any) => {
            return tag === search;
          });

          console.log(filteredTag);

          setIsSelectedTag(filteredTag);

          setTools(response.data);
        } else {
          setTools([]);
        }
      } else {
        const response = await api.get(`tools?q=${search}`);
        setTools(response.data);
      }
    }
    fetchItems();
  }, [search, isChecked]);

  async function handleAddTool(
    tool: Omit<ITools, 'id' | 'available'>,
  ): Promise<void> {
    try {
      const response = await api.post('/tools', {
        ...tool,
        available: true,
      });
      setTools([...tools, response.data]);
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

  function handleToggleValueCheckbox(): void {
    if (isChecked) {
      setIsTag(1);
    } else {
      setIsTag(0);
    }
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
            <input
              name="search"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="tag-input"
                name="tag-input"
                value={isTag}
                checked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
                onChange={() => handleToggleValueCheckbox}
              />
              <label htmlFor="tag-input">Search in tags only</label>
            </div>
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
              isSelectedTag={isSelectedTag}
            />
          ))}
      </ToolsContainer>
    </>
  );
};

export default Dashboard;
