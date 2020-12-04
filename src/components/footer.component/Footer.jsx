import React from "react";
import { connect } from "react-redux";

import { FooterContainer } from "./Footer.styles";

import {
  CompanyName,
  Option,
  Options,
  LinkContainer,
  Division,
  OptionsContainer,
} from "./Footer.styles";

const Footer = ({ error }) => {
  return (
    <>
      {!error ? (
        <FooterContainer>
          <OptionsContainer>
            <Options>
              <Option>
                <LinkContainer to="/privacy">Privacy Policy</LinkContainer>
              </Option>
              <Option>
                <LinkContainer to="/terms">Terms & Conditions</LinkContainer>
              </Option>
            </Options>
          </OptionsContainer>
          <CompanyName>
            Copyright © 2020 Codegg. All rights reserved.
          </CompanyName>
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
