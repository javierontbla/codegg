import React from "react";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  Navbar,
  Logo,
  Sections,
  Section,
  Space,
  SocialMedia,
  MediaIcon,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <Navbar className="container">
        <Logo>Logo</Logo>
        <Sections>
          <Section>Acciones</Section>
          <Section>Ingresos Pasivos</Section>
          <Section>Invertir</Section>
        </Sections>
        <Space />
        <SocialMedia>
          <MediaIcon icon={faFacebook} />
          <MediaIcon icon={faTwitter} />
          <MediaIcon icon={faEnvelope} />
        </SocialMedia>
      </Navbar>
    </>
  );
};

export default NavBar;
