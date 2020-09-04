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
          <MediaIcon icon={faTwitter} />
        </SocialMedia>
      </Navbar>
    </>
  );
};

export default NavBar;
