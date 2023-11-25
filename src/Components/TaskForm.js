import React from 'react';

const TaskForm = ({ handleSubmit, title, duedate, description, status, setTitle, setDueDate, setDescription, setStatus }) => (
  <div >
  <form onSubmit={handleSubmit} style={formStyle}>
    <label>Title:</label>
    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" style={inputStyle}/><br/>

    <label>Due Date:</label>
    <input type="date" name="duedate" value={duedate} onChange={(e) => setDueDate(e.target.value)} style={inputStyle}/><br/>

    <label>Description:</label>
    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" style={inputStyle}/><br/>

    <label>Status:</label>
      <select type="text" name="status" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" style={inputStyle} >
         <option value="">Select Status</option>
      <option value="In Progress">In Progress</option>
    </select><br/>

      <button type="submit" style={submitButtonStyle}>Add Task</button>
      
  </form>
  </div>
  
);


const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: 'auto',
  border: '1px solid #ccc',
  boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
 
};
const inputStyle = {
  height: '40px', // Adjust the height as needed
  marginBottom: '10px',
  padding: '8px',
  fontSize: '16px',
};

const submitButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px',
   transition: 'background-color 0.3s'
};

submitButtonStyle[':hover'] = { 
  backgroundColor: '#45a049', 
};

export default TaskForm;
  