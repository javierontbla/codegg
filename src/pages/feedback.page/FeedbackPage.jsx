import React, { useState } from "react";

import {
  Wrapper,
  ContactBlock,
  RightContainer,
  Title,
  Subtitle,
  Input,
  Comment,
  Buttons,
  Button,
  Alert,
  Img,
} from "./FeedbackPage.styles";
import { db } from "../../firebase";

const FeedbackPage = () => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("*llene los campos faltantes");

  const handleEmail = (e) => setEmail(e);
  const handleComment = (e) => setComment(e);

  const submitForm = () => {
    if (email && comment) {
      if (!email.includes("@")) {
        setMessage("*correo inválido");
        setAlert(true);
        return;
      } else {
        db.collection("formularios_feedback").add({
          email: email,
          comentario: comment,
        });
        setMessage("enviado");
        setEmail("");
        setComment("");
      }
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      <Wrapper>
        <ContactBlock>
          <Title>Feedback</Title>
          <Subtitle>Correo</Subtitle>
          <Input
            onChange={(e) => handleEmail(e.target.value)}
            placeholder="ejemplo@gmail.com"
          />
          <Comment
            onChange={(e) => handleComment(e.target.value)}
            placeholder="¿Qué podemos mejorar en la plataforma?"
          />
          <Buttons>
            <Button onClick={() => submitForm()}>Enviar</Button>
            <Alert alert={alert}>{message}</Alert>
          </Buttons>
        </ContactBlock>
        <RightContainer>
          <Img
            src={
              "https://firebasestorage.googleapis.com/v0/b/avgguido.appspot.com/o/varios%2Fmountains.svg?alt=media&token=a478ed74-30ae-4b56-b41b-7eb91250dd85"
            }
          />
        </RightContainer>
      </Wrapper>
    </>
  );
};

export default FeedbackPage;
