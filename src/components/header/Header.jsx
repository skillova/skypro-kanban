import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../User/User";
import {
  HeaderWrapper,
  Container,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUserLink,
} from "./Header.styled";

function Header() {
  const navigate = useNavigate();
  const [isUserOpen, setIsUserOpen] = useState(false);
  const toggleUser = () => {
    setIsUserOpen(!isUserOpen);
  };
  const handleNewCard = (e) => {
    e.preventDefault();
    // toggleModal();
    navigate("/PopNewCard");
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderBlock>
          <div>
            <a href="" target="_self">
              <HeaderLogo src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div>
            <a href="" target="_self">
              <HeaderLogo src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <HeaderNav>
            <HeaderButton id="btnMainNew" onClick={handleNewCard}>
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderButton>
            <HeaderUserLink
              onClick={(e) => {
                e.preventDefault();
                toggleUser();
              }}
            >
              Ivan Ivanov
            </HeaderUserLink>
            {isUserOpen && <User toggleUser={toggleUser} />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
