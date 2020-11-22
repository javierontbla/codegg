import React from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import icon from "./official_logo.svg";

import {
  Navbar,
  Logo,
  SocialMedia,
  MediaIcon,
  LinkContainer,
  Img,
  External,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Logo>
          <LinkContainer to="/">
            <Img src={icon} />
          </LinkContainer>
        </Logo>
        <SocialMedia>
          <External href="https://twitter.com/codegg_official">
            <MediaIcon icon={faTwitter} />
          </External>
        </SocialMedia>
      </Navbar>
    </>
  );
};

export default NavBar;
