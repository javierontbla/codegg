import React from "react";
import { connect } from "react-redux";

import { FooterContainer } from "./Footer.styles";

import {
  CompanyName,
  PrivacyPolicy,
  Data,
  Button,
  Copyright,
} from "./Footer.styles";

const Footer = ({ error }) => {
  return (
    <>
      {!error ? (
        <FooterContainer>
          <Data>
            <PrivacyPolicy>
              <Button to="/privacidad">Política de Privacidad</Button>
            </PrivacyPolicy>
            <CompanyName>
              <Copyright>©</Copyright>codegg.tech
            </CompanyName>
          </Data>
        </FooterContainer>
      ) : null}
    </>
  );
};

// redux
const mapStateToProps = ({ homePageReducer: { error } }) => ({
  error,
});

export default connect(mapStateToProps)(Footer);
