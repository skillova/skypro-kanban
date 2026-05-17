import { useState, useEffect } from "react";
import Column from "../Column/Column";
import Loader from "../Loader/Loader";
import { cardsList, statuses } from "../../data";
import { MainMain, Container, MainBlock, MainContent } from "./Content.styeled";

function Content() {
  const [isLoading, setIsLoading] = useState(true);
  const [localCardsList] = useState(cardsList);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <MainMain>
      <Container>
        <MainBlock>
          {isLoading && <Loader />}
          {!isLoading && (
            <MainContent>
              {statuses.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cardsObjList={localCardsList.filter(
                    (cardObj) => cardObj.status === status,
                  )}
                />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </Container>
    </MainMain>
  );
}
export default Content;
