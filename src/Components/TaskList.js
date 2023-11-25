import React from 'react';

const TaskList = ({ tasks, handleDelete, handleEdit }) => (
  <ul style={listStyle}>
    {tasks.map((task) => (
      <div key={task._id} style={taskContainerStyle}>
        <li style={taskItemStyle}><strong>Title:</strong> {task.title}</li>
        <li style={taskItemStyle}><strong>Due Date:</strong> {task.duedate}</li>
        <li style={taskItemStyle}><strong>Description:</strong> {task.description}</li>
        <li style={taskItemStyle}><strong>Status:</strong> {task.status}</li>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => handleDelete(task._id)}>Delete</button>
          <button style={buttonStyle} onClick={() => handleEdit(task._id)}>Edit</button>
        </div>
      </div>
    ))}
  </ul>
);

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  marginTop:50
};

const taskContainerStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  marginBottom: '15px',
  borderRadius: '8px',
};

const taskItemStyle = {
  marginBottom: '8px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '8px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default TaskList;
