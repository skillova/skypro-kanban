import React, { useState } from "react";
import User from "../User/User";
import {
  HeaderWrapper,
  Container,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUserLink
} from "./Header.styled";

function Header() {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const toggleUser = () => {
    setIsUserOpen(!isUserOpen);
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
            <HeaderButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderButton>
            <HeaderUserLink
              onClick={(e) => {
                e.preventDefault();
                toggleUser();
              }}
            >Ivan Ivanov
            </HeaderUserLink>
            {isUserOpen && <User toggleUser={toggleUser} />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
