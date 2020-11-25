import React from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import icon from "./official_logo.svg";

import {
  SocialMediaContainer,
  PagesContainer,
  LogoContainer,
  LinkContainer,
  MediaIcon,
  External,
  PageLink,
  Navbar,
  Img,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <Navbar>
        <PagesContainer>
          <LogoContainer>
            <LinkContainer to="/">
              <Img src={icon} />
            </LinkContainer>
          </LogoContainer>
          <LinkContainer to="/">
            <PageLink>Inicio</PageLink>
          </LinkContainer>
          <LinkContainer to="/que-hacemos">
            <PageLink>¿Qué hacemos?</PageLink>
          </LinkContainer>
          <LinkContainer to="/contacto">
            <PageLink>Contacto</PageLink>
          </LinkContainer>
        </PagesContainer>
        <SocialMediaContainer>
          <External href="https://twitter.com/codegg_official">
            <MediaIcon icon={faTwitter} />
          </External>
        </SocialMediaContainer>
      </Navbar>
    </>
  );
};

export default NavBar;
