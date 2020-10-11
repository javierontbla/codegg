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
            <CompanyName>
              <Copyright>©</Copyright>2019-2020 codegg.tech
            </CompanyName>
            <PrivacyPolicy>
              <Button to="/privacidad">Política de Privacidad</Button>
            </PrivacyPolicy>
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
