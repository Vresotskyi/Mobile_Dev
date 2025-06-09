import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { toggleTask, editTask, deleteTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, text);
    setIsEditing(false);
  };

  return (
    <li>
      <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
      {isEditing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
