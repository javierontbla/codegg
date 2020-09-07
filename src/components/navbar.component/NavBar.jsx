import React from "react";
import { faComments } from "@fortawesome/free-solid-svg-icons";
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
        <PhraseContainer />
        <SocialMedia>
          <LinkText to="/feedback">
            <MediaIcon icon={faComments} comment={"true"} />
          </LinkText>
          <a href="https://twitter.com/avgguido">
            <MediaIcon icon={faTwitter} />
          </a>
        </SocialMedia>
      </Navbar>
    </>
  );
};

export default NavBar;
