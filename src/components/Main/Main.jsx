import Header from "../../components/Header/Header"
import Content from "../../components/Content/Content";
import { GlobalStyles } from "../../GlobalStyles";
import { Wrapper } from "../../App.styled";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/*pop-up start*/}
        {/* <PopNewCard />
        <PopBrowse /> */}
        {/*pop-up end*/}
        <Header />
        <Content/>
        <Outlet />
      </Wrapper>
      <script src="js/script.js"></script>
    </>
  );
};

export default Main;