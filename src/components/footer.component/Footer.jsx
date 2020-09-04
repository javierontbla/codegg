import React from "react";
import { connect } from "react-redux";

import { FooterContainer } from "./Footer.styles";

import { CompanyName, PrivacyPolicy, Data, Button } from "./Footer.styles";

const Footer = ({ error }) => {
  return (
    <>
      {!error ? (
        <div className="container">
          <FooterContainer>
            <Data>
              <CompanyName>© 2019-2020 Avgguido.com</CompanyName>
              <PrivacyPolicy>
                <Button to="/privacidad">Política de Privacidad</Button>
              </PrivacyPolicy>
            </Data>
          </FooterContainer>
        </div>
      ) : null}
    </>
  );
};

// redux
const mapStateToProps = ({ homePageReducer: { error } }) => ({
  error,
});

export default connect(mapStateToProps)(Footer);
