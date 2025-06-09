import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
