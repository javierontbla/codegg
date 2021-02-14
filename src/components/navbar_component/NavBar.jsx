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
  UserMenuContainer,
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

  const close_user_menu = () => {
    set_menu_active(false);
  };

  const log_in = () => {
    auth.signInWithPopup(google_provider);
    close_user_menu();
  };

  const log_out = () => {
    auth.signOut();
    window.location.reload();
    close_user_menu();
  };

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
            <ActionButtonContainer onClick={() => display_profile_menu()}>
              <ActionButton
                navbar={"true"}
                action={
                  user_firebase ? `${user_firebase.user_data.user}` : "Menu"
                }
              />
            </ActionButtonContainer>
            <DropDownIcon onClick={() => display_profile_menu()} />
            <UserMenuContainer>
              <UserMenu menu_active={menu_active}>
                {!user_firebase ? (
                  <UserMenuOption responsive="true" onClick={() => log_in()}>
                    Log In
                  </UserMenuOption>
                ) : null}
                <HyperLink to={`/reviews`}>
                  <UserMenuOption
                    responsive="true"
                    onClick={() => close_user_menu()}
                  >
                    Reviews
                  </UserMenuOption>
                </HyperLink>
                <HyperLink to={`/faq`}>
                  <UserMenuOption
                    responsive="true"
                    faq="true"
                    user={user_firebase}
                    onClick={() => close_user_menu()}
                  >
                    FAQ
                  </UserMenuOption>
                </HyperLink>
                {user_firebase ? (
                  <>
                    <HyperLink
                      to={`/reviews/dashboard/${user_firebase.user_data.user_id}`}
                    >
                      <UserMenuOption onClick={() => close_user_menu()}>
                        Write
                      </UserMenuOption>
                    </HyperLink>
                    <HyperLink
                      to={`/profile/${user_firebase.user_data.user_id}`}
                    >
                      <UserMenuOption onClick={() => close_user_menu()}>
                        Edit Profile
                      </UserMenuOption>
                    </HyperLink>
                  </>
                ) : null}
                {user_firebase ? (
                  <UserMenuOption last_child={"true"} onClick={() => log_out()}>
                    Log Out
                  </UserMenuOption>
                ) : null}
              </UserMenu>
            </UserMenuContainer>
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
