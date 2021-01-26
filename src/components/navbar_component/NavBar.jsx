import React, { useState } from "react";
import { connect } from "react-redux";

import Codegg from "./media/official_logo.svg";
import UserIcon from "./media/user_button.svg";
import ActionButton from "../action_button_component/ActionButton";
import {
  Container,
  NavbarContainer,
  LinkContainer,
  LogoContainer,
  Img,
  PagesContainer,
  PageLink,
  ActionButtonContainer,
  ProfileContainer,
  UserContainer,
  User,
  Icon,
  Menu,
  MenuOption,
} from "./NavBar_styles";
import { google_provider, auth } from "../../firebase/firebase";

const NavBar = ({ user_firebase }) => {
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
      <Container>
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
            <LinkContainer to="/articles">
              <PageLink>FAQ</PageLink>
            </LinkContainer>
          </PagesContainer>
          <ProfileContainer>
            {user_firebase ? (
              <>
                <UserContainer>
                  <User onClick={() => display_profile_menu()}>
                    {user_firebase.user_data.user}
                    <Icon />
                  </User>
                  <Menu menu_active={menu_active}>
                    <MenuOption>Profile</MenuOption>
                    <MenuOption last_child={"true"} onClick={() => log_out()}>
                      Log Out
                    </MenuOption>
                  </Menu>
                </UserContainer>
              </>
            ) : (
              <ActionButtonContainer onClick={() => log_in()}>
                <ActionButton navbar={"true"} action={"Log In"}>
                  Ingresar
                </ActionButton>
              </ActionButtonContainer>
            )}
          </ProfileContainer>
        </NavbarContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({ user_reducer: { user_firebase } }) => ({
  user_firebase,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
