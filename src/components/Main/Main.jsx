import { useState, useEffect, useCallback } from "react";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import { GlobalStyles } from "../../GlobalStyles";
import { Wrapper } from "../../App.styled";
import { Outlet } from "react-router-dom";
import { fetchTasks } from "../../services/api";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [cardsList, setCardsList] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("tokenAuth");
  const getCardsList = useCallback(async () => {
    try {
      const data = await fetchTasks({ token });
      setCardsList(data);
    } catch (err) {
      setError(
        err.message ||
          "Ошибка загрузки задач. Проверьте подключение к интернету.",
      );
    } finally {
      setLoading(false);
    }
  }, [token]);
  useEffect(() => {
    getCardsList();
  }, [getCardsList]);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Content error={error} cardsList={cardsList} loading={loading} />
        <Outlet />
      </Wrapper>
    </>
  );
};

export default Main;
