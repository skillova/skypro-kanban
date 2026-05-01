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
  return (
    <>
      <div className="main__content">{columns}</div>
    </>
  );
}

export default Column;
