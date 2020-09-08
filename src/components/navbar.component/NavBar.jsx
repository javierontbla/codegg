import React from "react";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import icon from "./logo.icon.svg";

import {
  Navbar,
  Logo,
  PhraseContainer,
  SocialMedia,
  MediaIcon,
  LinkContainer,
  Text,
  Img,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Logo>
          <LinkContainer to="/">
            <Img src={icon} />{" "}
          </LinkContainer>
          <LinkContainer to="/">
            <Text>avgguido</Text>
          </LinkContainer>
        </Logo>
        <PhraseContainer />
        <SocialMedia>
          <LinkContainer to="/feedback">
            <MediaIcon icon={faComments} comment={"true"} />
          </LinkContainer>
          <a href="https://twitter.com/avgguido">
            <MediaIcon icon={faTwitter} />
          </a>
        </SocialMedia>
      </Navbar>
    </>
  );
};

export default NavBar;
