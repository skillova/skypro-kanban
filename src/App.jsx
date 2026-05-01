import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/header/Header";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";

function App() {

  return (
    <>
      <div className="wrapper">
        {/*pop-up start*/}
        <PopNewCard />
        <PopBrowse />
        {/*pop-up end*/}
        <Header />
        <Main />
      </div>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
