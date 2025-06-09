import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskFilter = () => {
  const { setFilter } = useTaskContext();

  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
};

export default TaskFilter;
