import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const fetchTasks = async (userId) => {
  try {
    const response = await axios.get(`${baseURL}/users/${userId}/tasks`);
    return response.data.tasks;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};

export const createTask = async (userId, taskData) => {
  try {
    const response = await axios.post(`${baseURL}/users/${userId}/tasks`, taskData);
    return response.data.user.taskmanagement;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteTask = async (userId, taskId) => {
  try {
    const response = await axios.delete(`${baseURL}/users/${userId}/tasks/${taskId}`);
    return response;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateTask = async (userId, taskId, taskData) => {
  try {
    const response = await axios.put(`${baseURL}/users/${userId}/tasks/${taskId}`, taskData);
    return response.data.user.taskmanagement;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};
