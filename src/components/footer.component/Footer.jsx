import React from "react";
import { connect } from "react-redux";

import { FooterContainer } from "./Footer.styles";

import {
  CompanyName,
  Option,
  Options,
  LinkContainer,
  Division,
} from "./Footer.styles";

const Footer = ({ error }) => {
  return (
    <>
      {!error ? (
        <FooterContainer>
          <Options>
            <Option>
              <LinkContainer to="/privacidad">
                Política de Privacidad
              </LinkContainer>
            </Option>
            <Division> · </Division>
            <Option>
              <LinkContainer to="/terminos">
                Términos y Condiciones
              </LinkContainer>
            </Option>
          </Options>
          <CompanyName>© Codegg.tech</CompanyName>
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
