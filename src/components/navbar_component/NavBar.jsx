import React, { useState } from "react";
import { connect } from "react-redux";

import Codegg from "./media/official_logo.svg";
import UserIcon from "./media/user_button.svg";
import ActionButton from "../action_button_component/ActionButton";
import {
  NavbarContainer,
  LinkContainer,
  LogoContainer,
  Img,
  PagesContainer,
  PageLink,
  UserContainer,
  ActionButtonContainer,
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
            <PageLink>Read</PageLink>
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
                  <MenuOption>Profile</MenuOption>
                  <MenuOption last_child={"true"} onClick={() => log_out()}>
                    Log Out
                  </MenuOption>
                </Menu>
              </ProfileContainer>
            </>
          ) : (
            <ActionButtonContainer onClick={() => log_in()}>
              <ActionButton navbar={"true"} action={"Log In"}>
                Ingresar
              </ActionButton>
            </ActionButtonContainer>
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
