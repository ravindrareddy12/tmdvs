import * as api from '../Store/userStore';

export const taskAPI = {
  fetchTasks: (userId) => api.fetchTasks(userId),
  createTask: (userId, taskData) => api.createTask(userId, taskData),
  deleteTask: (userId, taskId) => api.deleteTask(userId, taskId),
  updateTask: (userId, taskId, taskData) => api.updateTask(userId, taskId, taskData),
};