import React, { useState } from "react";

import {
  Wrapper,
  ContactBlock,
  ParentContainer,
  ChildContainer,
  Title,
  Subtitle,
  Input,
  Comment,
  Buttons,
  Button,
  Alert,
  Img,
} from "./FeedbackPage.styles";
import { db } from "../../_firebase/firebase.config";

const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("*llene los campos faltantes");

  const handleName = (e) => setName(e);
  const handleLastName = (e) => setLastName(e);
  const handleEmail = (e) => setEmail(e);
  const handleComment = (e) => setComment(e);

  const submitForm = () => {
    if (name && lastName && email && comment) {
      if (!email.includes("@")) {
        setMessage("*correo inválido");
        setAlert(true);
        return;
      } else {
        db.collection("formularios_feedback").add({
          nombre: name,
          apellido: lastName,
          email,
          comentario: comment,
        });
        setMessage("enviado");
        setName("");
        setLastName("");
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
          <Subtitle>Nombre</Subtitle>
          <Input type="text" onChange={(e) => handleName(e.target.value)} />
          <Subtitle>Apellido</Subtitle>
          <Input type="text" onChange={(e) => handleLastName(e.target.value)} />
          <Subtitle>Correo</Subtitle>
          <Input
            onChange={(e) => handleEmail(e.target.value)}
            placeholder="ejemplo@gmail.com"
          />
          <Comment onChange={(e) => handleComment(e.target.value)} />
          <Buttons>
            <Button onClick={() => submitForm()}>Enviar</Button>
            <Alert alert={alert}>{message}</Alert>
          </Buttons>
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

export default FeedbackPage;
