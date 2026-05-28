import { useMemo } from "react";
import Column from "../Column/Column";
import Loader from "../Loader/Loader";
import { MainMain, Container, MainBlock, MainContent } from "./Content.styeled";
const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Content({ cardsList, loading, error }) {
  const groupedCards = useMemo(() => {
    return statuses.reduce((acc, status) => {
      acc[status] = cardsList.filter((card) => card.status === status);
      return acc;
    }, {});
  }, [cardsList]);

  return (
    <MainMain>
      <Container>
        <MainBlock>
          {loading && <Loader />}
          {!loading && error && (
            <div style={{ color: "red", padding: "15px", textAlign: "center" }}>
              {error}
            </div>
          )}
          {!loading && (
            <MainContent>
              {statuses.map((status) => {
                const cardsForStatus = groupedCards[status];
                return (
                  <Column
                    key={status}
                    title={status}
                    cardsObjList={cardsForStatus}
                  />
                );
              })}
            </MainContent>
          )}
        </MainBlock>
      </Container>
    </MainMain>
  );
}
export default Content;
