import React from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import {
  Navbar,
  Logo,
  PhraseContainer,
  SocialMedia,
  MediaIcon,
  LinkText,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Logo>
          <LinkText to="/">Avgguido</LinkText>
        </Logo>
        <PhraseContainer>cualquiera puede programar</PhraseContainer>
        <SocialMedia>
          <MediaIcon icon={faTwitter} />
        </SocialMedia>
      </Navbar>
    </>
  );
};

export default NavBar;
