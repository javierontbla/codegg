import React from "react";
import { connect } from "react-redux";

import { FooterContainer } from "./Footer.styles";

import {
  CompanyName,
  Option,
  Options,
  LinkContainer,
  Division,
  Slogan,
  SloganTitle,
  SloganSubtitle,
} from "./Footer.styles";

const Footer = ({ error }) => {
  return (
    <>
      {!error ? (
        <FooterContainer>
          <Slogan>
            <SloganTitle>Indaga.</SloganTitle>
            <SloganSubtitle>Luego Invierte.</SloganSubtitle>
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
          </Slogan>
          <CompanyName>© Codegg.tech</CompanyName>
        </FooterContainer>
      ) : null}
    </>
  );
};

// redux
const mapStateToProps = ({ categories_page_reducer: { error } }) => ({
  error,
});

export default connect(mapStateToProps)(Footer);
