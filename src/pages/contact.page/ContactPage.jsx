import React from "react";

import {
  Wrapper,
  ContactBlock,
  ParentContainer,
  ChildContainer,
  Title,
  Subtitle,
  Input,
  Comment,
  Button,
} from "./ContactPage.styles";
const ContactPage = () => {
  return (
    <>
      <Wrapper>
        <ContactBlock>
          <Title>Contacto</Title>
          <Subtitle>Nombre</Subtitle>
          <Input></Input>
          <Subtitle>Apellido</Subtitle>
          <Input></Input>
          <Subtitle>Correo</Subtitle>
          <Input></Input>
          <Comment></Comment>
          <Button>Enviar</Button>
        </ContactBlock>
        <ParentContainer />
        <ChildContainer />
      </Wrapper>
    </>
  );
};

export default ContactPage;
