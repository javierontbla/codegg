import React from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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
          <LinkContainer to="/categorias">
            <PageLink>Categorías</PageLink>
          </LinkContainer>
          <LinkContainer to="/comunidad">
            <PageLink>Comunidad</PageLink>
          </LinkContainer>
          <LinkContainer to="/contacto">
            <PageLink>Contacto</PageLink>
          </LinkContainer>
        </PagesContainer>
        <UserContainer>
          <LogIn>Ingresar</LogIn>
          <SignIn>Registrarme</SignIn>
        </UserContainer>
      </Navbar>
    </>
  );
};

export default NavBar;
