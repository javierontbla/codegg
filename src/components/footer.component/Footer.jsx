import React from "react";
import { connect } from "react-redux";

import { FooterContainer } from "./Footer.styles";

import { CompanyName, Option, Options, Button } from "./Footer.styles";

const Footer = ({ error }) => {
  return (
    <>
      {!error ? (
        <FooterContainer>
          <Options>
            <Option>
              <Button to="/privacidad">Política de Privacidad</Button>
            </Option>
            <Option>
              <Button to="/privacidad">Términos y Condiciones</Button>
            </Option>
          </Options>
          <CompanyName>© codegg.tech</CompanyName>
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
