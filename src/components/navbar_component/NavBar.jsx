import React, { useState } from "react";
import { connect } from "react-redux";

import Codegg from "./media/official_logo.svg";
import UserIcon from "./media/user_button.svg";
import {
  Navbar,
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
import { User } from "../../redux/user/class";

const NavBar = ({ active_user }) => {
  const [menu_active, set_menu_active] = useState(false);

  const display_profile_menu = () => {
    set_menu_active((prev_state) => !prev_state);
  };

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
            <>
              <ProfileContainer>
                <ProfileIcon
                  src={UserIcon}
                  onClick={() => display_profile_menu()}
                />
                <Menu menu_active={menu_active}>
                  <MenuOption>Perfil</MenuOption>
                  <MenuOption>Ajustes</MenuOption>
                  <MenuOption last_child={"true"}>Cerrar Sesión</MenuOption>
                </Menu>
              </ProfileContainer>
            </>
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
