import React from "react";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { FooterContainer } from "./Footer.styles";

import {
  CompanyName,
  Feedback,
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
        <div className="container">
          <FooterContainer>
            <Data>
              <CompanyName>© 2019-2020 Avgguido.com</CompanyName>
              <Directory>
                <Feedback>
                  <Button to="/feedback">
                    <span>
                      <Icon icon={faComment} />
                    </span>
                    Feedback
                  </Button>
                </Feedback>
                <PrivacyPolicy>
                  <Button to="/privacidad">Política de Privacidad</Button>
                </PrivacyPolicy>
              </Directory>
            </Data>
          </FooterContainer>
        </div>
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
