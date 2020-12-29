import React from "react";
import { connect } from "react-redux";

import {
  FooterContainer,
  OptionsContainer,
  Options,
  Option,
  CompanyName,
  LinkContainer,
} from "./Footer_styles";

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
const mapStateToProps = ({ articles_page_reducer: { error } }) => ({
  error,
});

export default connect(mapStateToProps)(Footer);
