import React from "react";
import {
  faAddressBook,
  faUsers,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { FooterContainer } from "./Footer.styles";

import {
  CompanyName,
  Buttons,
  PrivacyPolicy,
  Data,
  Directory,
  Button,
  Icon,
} from "./Footer.styles";

const Footer = ({ error, homeLoading }) => {
  return (
    <>
      {!error && !homeLoading ? (
        <FooterContainer>
          <div className="container">
            <Directory>
              <Buttons>
                <Button to="/contacto">
                  <span>
                    <Icon icon={faAddressBook} />
                  </span>
                  Contacto
                </Button>
                <Button we={"true"} to="/nosotros">
                  <span>
                    <Icon icon={faUsers} />
                  </span>
                  Nosotros
                </Button>
              </Buttons>
              <PrivacyPolicy>
                <Button to="/privacidad">
                  <span>
                    <Icon icon={faUserSecret} />
                  </span>
                  Política de Privacidad
                </Button>
              </PrivacyPolicy>
            </Directory>
            <Data>
              <CompanyName>© 2019 - 2020, Avgguido</CompanyName>
            </Data>
          </div>
        </FooterContainer>
      ) : null}
    </>
  );
};

// redux
const mapStateToProps = ({ homePageReducer: { loading, error } }) => ({
  error,
  homeLoading: loading,
});

export default connect(mapStateToProps)(Footer);
