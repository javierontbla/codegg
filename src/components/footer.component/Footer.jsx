import React from "react";

import { FooterContainer } from "./Footer.styles";

import {
  Content,
  CompanyName,
  Buttons,
  PrivacyPolicy,
  TermsUse,
  Data,
} from "./Footer.styles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="container">
          <Data>
            <CompanyName>© 2019 - 2020, Compañia</CompanyName>
            <Buttons>
              <PrivacyPolicy>Política de Privacidad</PrivacyPolicy>
              <TermsUse>Términos de Uso</TermsUse>
            </Buttons>
          </Data>
          <Content>
            Bajo ninguna circunstancia la información mostrada en esta página
            debe ser sustituida por asesoría profesional.
          </Content>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
