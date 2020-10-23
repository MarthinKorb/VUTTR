import React, { useState, useEffect } from 'react';

import { FiSearch } from 'react-icons/fi';
import Header from '../../components/Header';

import api from '../../services/api';

import Tool from '../../components/Tool';
import ModalAddTool from '../../components/ModalAddTool';
import ModalEditTool from '../../components/ModalEditTool';
import ModalDeleteConfirmation from '../../components/ModalDeleteConfirmation';

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
  const [deletingTool, setDeletingTool] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [search, setSearch] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isTag, setIsTag] = useState(0);
  const [isSelectedTag, setIsSelectedTag] = useState({} as any);

  const [idSelected, setIdSelected] = useState(-1);

  useEffect(() => {
    async function loadTools(): Promise<void> {
      //searching all tools in system
      const response = await api.get('/tools');
      //setting the state with the response of api
      setTools(response.data);
    }
    loadTools();
  }, []);

  useEffect(() => {
    async function fetchItems(): Promise<void> {
      //testing if check-box is checked and if there's something in it
      if (isChecked && search !== '') {
        const response = await api.get(`tools?tags_like=${search}`);

        if (response.data[0]) {
          const { tags } = response.data[0];
          const filteredTag = tags.map((tag: any) => {
            return tag === search;
          });
          setIsSelectedTag(filteredTag);
          setTools(response.data);
        } else {
          setTools([]);
        }
      } else {
        //Catching all tools with title, description or link with any word = search
        const response = await api.get(`tools?q=${search}`);
        console.log(response.data);
        //putting filtered tools in the list
        setTools(response.data);
      }
    }
    fetchItems();
    //making sure that when search or ckeck-box change the aplication execute
    //the function fetchItems to load the list of items again
  }, [search, isChecked]);

  async function handleAddTool(tool: Omit<ITools, 'id'>): Promise<void> {
    try {
      //posting data to create a new tool
      const response = await api.post('/tools', {
        ...tool,
      });
      //setting state with the current list of tools and the new one
      setTools([...tools, response.data]);
      //console.log(tools);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateTool(tool: Omit<ITools, 'id'>): Promise<void> {
    try {
      // updating tool with the tool that was being edited and the current list
      // of tools
      const response = await api.put(`/tools/${editingTool.id}`, {
        ...editingTool,
        ...tool,
      });

      // mapping tool's list in which contains the tool to be updated.
      // if it finds the tool, it updates with new data
      // if it's not, it keeps the last data
      setTools(
        tools.map(mappedTool =>
          mappedTool.id === editingTool.id ? { ...response.data } : mappedTool,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  function handleOpenDeleteModal(id: number): void {
    setIdSelected(id);
    setDeleteModalOpen(!deleteModalOpen);
  }

  async function handleDeleteTool(id: number): Promise<void> {
    try {
      await api.delete(`/tools/${id}`);

      setTools(tools.filter(tool => tool.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (deletingTool) {
      handleDeleteTool(idSelected);
      setDeleteModalOpen(!deleteModalOpen);
      setDeletingTool(false);
      setIdSelected(-1);
    }
  }, [deletingTool, idSelected, deleteModalOpen]);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function toggleDeleteModal(): void {
    setDeleteModalOpen(!deleteModalOpen);
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
      setIsSelectedTag({});
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

      <ModalDeleteConfirmation
        isOpen={deleteModalOpen}
        setIsOpen={toggleDeleteModal}
        deletingTool={deletingTool}
        setDeletingTool={setDeletingTool}
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
              handleOpenDeleteModal={handleOpenDeleteModal}
              handleEditTool={handleEditTool}
              isSelectedTag={isSelectedTag}
            />
          ))}
      </ToolsContainer>
    </>
  );
};

export default Dashboard;
