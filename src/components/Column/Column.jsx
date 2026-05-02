import Card from "../Card/Card";

function Column({ title, cardsObjList }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <div className="cards__item">
          {cardsObjList.map((cardObj) => (
            <Card key={cardObj.id} cardObj={cardObj} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Column;
