import React, { useState } from "react";
import PopUser from "../PopUser/PopUser";
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
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);

  const togglePopUser = () => {
    setIsPopUserOpen(!isPopUserOpen);
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
              href="#user-set-target"
              className="header__user _hover02"
              onClick={(e) => {
                e.preventDefault();
                togglePopUser();
              }}
            >
              Ivan Ivanov
            </HeaderUserLink>
            {isPopUserOpen && <PopUser />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
