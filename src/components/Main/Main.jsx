import { useState, useEffect } from "react";
import Column from "../Column/Column";
import Loading from "./Loading";
import { cardsList, statuses } from "../../data";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [localCardsList] = useState(cardsList);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading && <Loading />}
          {!isLoading && (
            <div className="main__content">
              {statuses.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cardsObjList={localCardsList.filter(
                    (cardObj) => cardObj.status === status,
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
export default Main;
