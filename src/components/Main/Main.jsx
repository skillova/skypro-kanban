import Column from "../Column/Column";
import { cardsList, statuses } from "../../data";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div class="main__content">
            {statuses.map((status) => (
              <Column
                key={status}
                title={status}
                cardsObjList={cardsList.filter(
                  (cardObj) => cardObj.status === status,
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
