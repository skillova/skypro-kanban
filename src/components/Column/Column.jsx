import React, { useState, useEffect } from "react";
import Cards from "../Card/Card";

function Column() {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const columns = statuses.map((status) => (
    <div className="main__column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        <Cards status={status} key={status} />
      </div>
    </div>
  ));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 200,
          fontSize: 18,
          color: "#666",
          textAlign: "center",
        }}
      >
        Данные загружаются...
      </div>
    );
  }

  return (
    <>
      <div className="main__content">{columns}</div>
    </>
  );
}

export default Column;
