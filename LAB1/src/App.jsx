import React, { useRef, useCallback } from 'react';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { useTaskContext } from './context/TaskContext';

const App = () => {
  const { addTask } = useTaskContext();
  const inputRef = useRef();

  const handleAdd = useCallback(() => {
    if (inputRef.current.value.trim()) {
      addTask(inputRef.current.value.trim());
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }, [addTask]);

  return (
    <div>
      <h1>Task Manager</h1>
      <input ref={inputRef} placeholder="New task..." />
      <button onClick={handleAdd}>Add</button>
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default App;
