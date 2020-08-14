import React from "react";
import { faAddressBook, faUsers, faUserSecret } from "@fortawesome/free-solid-svg-icons";

import { FooterContainer } from "./Footer.styles";

import {
  CompanyName,
  Buttons,
  PrivacyPolicy,
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
          <Buttons>
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
          </Buttons>
              <PrivacyPolicy>
                <Button>
                <span>
                <Icon icon={faUserSecret} />
              </span>
                Política de Privacidad</Button>
              </PrivacyPolicy>
          </Directory>
          <Data>
            <CompanyName>© 2019 - 2020, Avgguido</CompanyName>
          </Data>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
