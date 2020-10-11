import React from "react";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import icon from "./codegg.logo.svg";

import {
  Navbar,
  Logo,
  SocialMedia,
  MediaIcon,
  LinkContainer,
  Img,
  External,
  Text,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Logo>
          <LinkContainer to="/">
            <Img src={icon} />
          </LinkContainer>
          <LinkContainer to="/">
            <Text>codegg</Text>
          </LinkContainer>
        </Logo>
        <SocialMedia>
          <LinkContainer to="/feedback">
            <MediaIcon icon={faCommentAlt} comment={"true"} />
          </LinkContainer>
          <External href="https://twitter.com/codegg_official">
            <MediaIcon icon={faTwitter} />
          </External>
        </SocialMedia>
      </Navbar>
    </>
  );
};

export default NavBar;
