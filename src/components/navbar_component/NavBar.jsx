import React from "react";
import { connect } from "react-redux";

import Codegg from "./official_logo.svg";
import {
  Navbar,
  LinkContainer,
  LogoContainer,
  Img,
  PagesContainer,
  PageLink,
  UserContainer,
  LogIn,
  ProfileMenu,
} from "./NavBar_styles";
import { User } from "../../redux/user/class";

const NavBar = ({ active_user }) => {
  return (
    <>
      <Navbar className="container">
        <PagesContainer>
          <LogoContainer>
            <LinkContainer to="/">
              <Img src={Codegg} />
            </LinkContainer>
          </LogoContainer>
          <LinkContainer to="/">
            <PageLink>Inicio</PageLink>
          </LinkContainer>
          <LinkContainer to="/articulos">
            <PageLink>Artículos</PageLink>
          </LinkContainer>
          <LinkContainer to="/inversores">
            <PageLink>Inversores</PageLink>
          </LinkContainer>
        </PagesContainer>
        <UserContainer>
          {active_user ? (
            <ProfileMenu>logged in</ProfileMenu>
          ) : (
            <LogIn onClick={() => User.log_in_with_google()}>Ingresar</LogIn>
          )}
        </UserContainer>
      </Navbar>
    </>
  );
};

// redux
const mapStateToProps = ({ user_reducer: { active_user } }) => ({
  active_user,
});

export default connect(mapStateToProps, null)(NavBar);
