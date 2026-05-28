import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

// Регистрация
export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(
      API_URL,
      { name, login, password },
      {
        headers: { "Content-Type": "" },
      },
    );

    localStorage.setItem("tokenAuth", data.data.user.token);
    return data.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка регистрации");
  }
}

// Авторизация
export async function signIn(userData) {
  try {
    const data = await axios.post(`${API_URL}/login`, userData, {
      headers: { "Content-Type": "" },
    });
    localStorage.setItem("tokenAuth", data.data.user.token);
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}
