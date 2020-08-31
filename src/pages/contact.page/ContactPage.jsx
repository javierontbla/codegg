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
  Img,
} from "./ContactPage.styles";
const ContactPage = () => {
  return (
    <>
      <Wrapper>
        <ContactBlock>
          <Title>Feedback</Title>
          <Subtitle>Nombre</Subtitle>
          <Input />
          <Subtitle>Apellido</Subtitle>
          <Input />
          <Subtitle>Correo</Subtitle>
          <Input placeholder="ejemplo@gmail.com" />
          <Comment></Comment>
          <Button>Enviar</Button>
        </ContactBlock>
        <ParentContainer />
        <ChildContainer>
          <Img
            src={
              "https://firebasestorage.googleapis.com/v0/b/avgguido.appspot.com/o/varios%2Fmountains.svg?alt=media&token=a478ed74-30ae-4b56-b41b-7eb91250dd85"
            }
          />
        </ChildContainer>
      </Wrapper>
    </>
  );
};

export default ContactPage;
