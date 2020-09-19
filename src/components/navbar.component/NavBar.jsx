import React from "react";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
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
  External,
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
            <MediaIcon icon={faCommentAlt} comment={"true"} />
          </LinkContainer>
          <External href="https://twitter.com/avgguido">
            <MediaIcon icon={faTwitter} />
          </External>
        </SocialMedia>
      </Navbar>
    </>
  );
};

export default NavBar;
