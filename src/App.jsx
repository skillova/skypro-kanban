import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/header/Header";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import { GlobalStyles } from "./GlobalStyles";
import { Wrapper } from "./App.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/*pop-up start*/}
        <PopNewCard />
        <PopBrowse />
        {/*pop-up end*/}
        <Header />
        <Main />
      </Wrapper>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
