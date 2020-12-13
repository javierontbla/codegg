import React from "react";

import icon from "./official_logo.svg";
import {
  PagesContainer,
  LogoContainer,
  LinkContainer,
  UserContainer,
  PageLink,
  SignIn,
  Navbar,
  LogIn,
  Img,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <Navbar className="container">
        <PagesContainer>
          <LogoContainer>
            <LinkContainer to="/">
              <Img src={icon} />
            </LinkContainer>
          </LogoContainer>
          <LinkContainer to="/">
            <PageLink>Home</PageLink>
          </LinkContainer>
          <LinkContainer to="/categories">
            <PageLink>Portfolios</PageLink>
          </LinkContainer>
          <LinkContainer to="/traders">
            <PageLink>Investors</PageLink>
          </LinkContainer>
        </PagesContainer>
        <UserContainer>
          <LogIn>Log In</LogIn>
          <SignIn>Sign In</SignIn>
        </UserContainer>
      </Navbar>
    </>
  );
};

export default NavBar;
