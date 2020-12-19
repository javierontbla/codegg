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
            <PageLink>Inicio</PageLink>
          </LinkContainer>
          <LinkContainer to="/articulos">
            <PageLink>Artículos</PageLink>
          </LinkContainer>
          <LinkContainer to="/inversionistas">
            <PageLink>Inversionistas</PageLink>
          </LinkContainer>
        </PagesContainer>
        <UserContainer>
          <LogIn>Ingresar</LogIn>
          <SignIn>Registrarse</SignIn>
        </UserContainer>
      </Navbar>
    </>
  );
};

export default NavBar;
