import React, { useState } from "react";
import { connect } from "react-redux";

import Codegg from "./media/official_logo.svg";
import UserIcon from "./media/user_button.svg";
import {
  NavbarContainer,
  LinkContainer,
  LogoContainer,
  Img,
  PagesContainer,
  PageLink,
  UserContainer,
  LogIn,
  ProfileContainer,
  ProfileIcon,
  Menu,
  MenuOption,
} from "./NavBar_styles";
import { google_provider, auth } from "../../firebase";

const NavBar = ({ active_user_database }) => {
  const [menu_active, set_menu_active] = useState(false);

  const display_profile_menu = () => {
    set_menu_active((prev_state) => !prev_state);
  };

  const log_in = () => {
    auth.signInWithPopup(google_provider);
  };

  const log_out = () => {
    auth.signOut();
    set_menu_active(false);
  };

  return (
    <>
      <NavbarContainer className="container">
        <PagesContainer>
          <LogoContainer>
            <LinkContainer to="/">
              <Img src={Codegg} />
            </LinkContainer>
          </LogoContainer>
          <LinkContainer to="/">
            <PageLink>Home</PageLink>
          </LinkContainer>
          <LinkContainer to="/articles">
            <PageLink>Articles</PageLink>
          </LinkContainer>
          <LinkContainer to="/investors">
            <PageLink>Investors</PageLink>
          </LinkContainer>
        </PagesContainer>
        <UserContainer>
          {active_user_database ? (
            <>
              <ProfileContainer>
                <ProfileIcon
                  src={UserIcon}
                  onClick={() => display_profile_menu()}
                />
                <Menu menu_active={menu_active}>
                  <MenuOption>Perfil</MenuOption>
                  <MenuOption last_child={"true"} onClick={() => log_out()}>
                    Cerrar Sesión
                  </MenuOption>
                </Menu>
              </ProfileContainer>
            </>
          ) : (
            <LogIn onClick={() => log_in()}>Ingresar</LogIn>
          )}
        </UserContainer>
      </NavbarContainer>
    </>
  );
};

// redux
const mapStateToProps = ({ user_reducer: { active_user_database } }) => ({
  active_user_database,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
