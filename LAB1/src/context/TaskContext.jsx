import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const editTask = (id, text) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active': return tasks.filter(t => !t.done);
      case 'completed': return tasks.filter(t => t.done);
      default: return tasks;
    }
  }, [tasks, filter]);

  return (
    <TaskContext.Provider value={{
      tasks: filteredTasks,
      addTask,
      toggleTask,
      editTask,
      deleteTask,
      setFilter
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
