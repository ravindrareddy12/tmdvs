import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm  from './TaskForm';
import  TaskList  from './TaskList';
import { EditForm } from './EditForm';
import { taskAPI } from './Taskapi';

const Dashboard = ({ userId, userName }) => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const [title, setTitle] = useState("");
  const [duedate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState('pendingStatus');
  const [editingTaskId, setEditingTaskId] = useState(null); 
  

  const navigate = useNavigate();
   useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await taskAPI.fetchTasks(userId);
        setTasks(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, [userId]);

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newTasks = await taskAPI.createTask(userId, { title, duedate, description, status });
      console.log(duedate)
      console.log(status)
      setTasks(newTasks);


      setTitle("");
      setDueDate("");
      setDescription("");
      setStatus("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(storedTasks)
  setTasks(storedTasks);
  }, []);
  
    const handleDelete = async (taskId) => {
    try {
      await taskAPI.deleteTask(userId, taskId);
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error(error);
    }
  };

 const handleEdit = (taskId) => {

  setEditingTaskId(taskId);

 
  const editingTask = tasks.find((task) => task._id === taskId);

  const { title, duedate, description, status } = editingTask;
  setTitle(title);
  setDueDate(duedate);
  setDescription(description);
  setStatus(status);
};
 const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const updatedTask = await taskAPI.updateTask(userId, editingTaskId, {
      title,
      duedate,
      description,
      status,
    });

    console.log("Updated Task:", updatedTask);

    const updatedTasks = tasks.map((task) =>
      task._id === editingTaskId ? updatedTask : task
    );

    console.log("Updated Tasks:", updatedTasks);


    setTasks(updatedTasks[0]); 

    setTitle("");
    setDueDate("");
    setDescription("");
    setStatus("");
    setEditingTaskId(null);
  } catch (error) {
    console.error(error);
  }
};


  const handleLogout = () => {
     navigate('/');
  }
  return (
     <div style={dashboardStyle}>
      <h2 style={{ marginLeft:200 }}>Welcome {userName}</h2>
      <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
      <h4 style={{ marginLeft:200,marginTop:50 }}>Add Tasks</h4>
      <TaskForm
        handleSubmit={handleSubmit}
        title={title}
        dueDate={duedate}
        description={description}
        status={status}
        setTitle={setTitle}
        setDueDate={setDueDate}
        setDescription={setDescription}
        setStatus={setStatus}
      />

      {tasks.length > 0 ? (
        <TaskList tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} />
      ) : (
        <p style={noTasksStyle}>No tasks available</p>
      )}

      {editingTaskId && (
        <EditForm
          handleUpdate={handleUpdate}
          title={title}
          dueDate={duedate}
          description={description}
          status={status}
          setTitle={setTitle}
          setDueDate={setDueDate}
          setDescription={setDescription}
          setStatus={setStatus}
        />
      )}
    </div>
  );
};


const dashboardStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  maxWidth: '800px',
  margin: 'auto',
};
const logoutButtonStyle = {
  padding: '8px 12px',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginLeft:200
};
const noTasksStyle = {
  fontStyle: 'italic',
  color: '#888',
  marginLeft: 200,
  marginTop: 50 
};



export default Dashboard;
