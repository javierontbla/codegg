import React from "react";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  Navbar,
  Logo,
  SearchContainer,
  SearchBox,
  SocialMedia,
  MediaIcon,
  LinkText,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Logo><LinkText to='/'>Avgguido</LinkText></Logo>
        <SearchContainer>
        <SearchBox type="text" placeholder="busca tags" />
        </SearchContainer>
        <SocialMedia>
          <MediaIcon icon={faTwitter} />
        </SocialMedia>
      </Navbar>
    </>
  );
};

export default NavBar;
