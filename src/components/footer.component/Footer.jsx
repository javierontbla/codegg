import React from "react";
import { faAddressBook, faUsers } from "@fortawesome/free-solid-svg-icons";

import { FooterContainer } from "./Footer.styles";

import {
  Content,
  CompanyName,
  Buttons,
  PrivacyPolicy,
  TermsUse,
  Data,
  Directory,
  Button,
  Icon,
} from "./Footer.styles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="container">
          <Directory>
            <Button>
              <span>
                <Icon icon={faAddressBook} />
              </span>
              Contacto
            </Button>
            <Button we={"true"}>
              <span>
                <Icon icon={faUsers} />
              </span>
              Nosotros
            </Button>
          </Directory>
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
