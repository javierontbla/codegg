import React, { useState } from "react";
import { connect } from "react-redux";

import Codegg from "./media/official_logo.svg";
import ActionButton from "../action_button_component/ActionButton";
import {
  Container,
  NavbarContainer,
  ActionButtonContainer,
  HyperLink,
  LogoContainer,
  Logo,
  PageLinksContainer,
  PageLink,
  UserProfileContainer,
  UserContainer,
  User,
  DropDownIcon,
  UserMenu,
  UserMenuOption,
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

  // ${user_firebase.user_data.user_id}

  return (
    <>
      <Container>
        <NavbarContainer className="container">
          <PageLinksContainer>
            <LogoContainer>
              <HyperLink to="/">
                <Logo src={Codegg} />
              </HyperLink>
            </LogoContainer>
            <HyperLink to="/">
              <PageLink>Home</PageLink>
            </HyperLink>
            <HyperLink to="/reviews">
              <PageLink>Reviews</PageLink>
            </HyperLink>
            <HyperLink to="/faq">
              <PageLink>FAQ</PageLink>
            </HyperLink>
          </PageLinksContainer>
          <UserProfileContainer>
            {user_firebase ? (
              <>
                <UserContainer>
                  <User onClick={() => display_profile_menu()}>
                    {user_firebase.user_data.user}
                    <DropDownIcon />
                  </User>
                  <UserMenu menu_active={menu_active}>
                    <HyperLink
                      to={`/profile/${user_firebase.user_data.user_id}`}
                    >
                      <UserMenuOption>Profile</UserMenuOption>
                    </HyperLink>
                    <HyperLink
                      to={`/reviews/dashboard/${user_firebase.user_data.user_id}`}
                    >
                      <UserMenuOption>Drafts</UserMenuOption>
                    </HyperLink>
                    <UserMenuOption
                      last_child={"true"}
                      onClick={() => log_out()}
                    >
                      Log Out
                    </UserMenuOption>
                  </UserMenu>
                </UserContainer>
              </>
            ) : (
              <ActionButtonContainer onClick={() => log_in()}>
                <ActionButton navbar={"true"} action={"Log In"}>
                  Ingresar
                </ActionButton>
              </ActionButtonContainer>
            )}
          </UserProfileContainer>
        </NavbarContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({ user_reducer: { user_firebase } }) => ({
  user_firebase,
});

export default connect(mapStateToProps, null)(NavBar);
