import axios from "axios";

const API_URL = "https://wedev-api.sky.pro";

// Получить список задач
export async function fetchTasks({ token }) {
  try {
    const response = await axios.get(`${API_URL}/api/kanban`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
  }
}

// Добавить задачу в список
export async function createTask({ token, task }) {
  try {
    const response = await axios.post(`${API_URL}/api/kanban`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка создания задачи");
  }
}

// Получить задачу по id
export async function fetchGetTask({ token, id }) {
  try {
    const response = await axios.get(`${API_URL}/api/kanban/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка поиска задачи");
  }
}
