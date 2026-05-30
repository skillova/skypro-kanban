import Card from "../Card/Card";
import {
  ColumnWrapper,
  ColumnTitle,
  CardsContainer,
  CardsList,
} from "./Column.styled";

function Column({ title, cardsObjList }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        <CardsList>
          {cardsObjList.map((cardObj) => (
            <Card key={cardObj._id} cardObj={cardObj} />
          ))}
        </CardsList>
      </CardsContainer>
    </ColumnWrapper>
  );
}
export default Column;
