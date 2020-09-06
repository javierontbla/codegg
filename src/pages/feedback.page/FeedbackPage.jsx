import React, { useState } from "react";
import {
  faExclamationCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

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
  Icon,
  MessageWrapper,
} from "./FeedbackPage.styles";
import { sendFormStart } from "../../redux/feedback.page/actions";

const FeedbackPage = ({ sendForm }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState(null);

  const handleEmail = (e) => setEmail(e);
  const handleComment = (e) => setComment(e);

  const submitForm = () => {
    if (email && comment) {
      // catch a real email
      if (!email.includes("@")) {
        setIcon(faExclamationCircle);
        setMessage("Correo inválido");
        setDisplay(true);
        return;
      } else {
        // saga action start
        sendForm({ email, comment });
        setEmail("");
        setComment("");
        setIcon(faEnvelope);
        setMessage("Enviado");
        setDisplay(true);
      }
    } else {
      setIcon(faExclamationCircle);
      setMessage("Llena los campos");
      setDisplay(true);
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
            value={email}
          />
          <Comment
            onChange={(e) => handleComment(e.target.value)}
            placeholder="¿Qué podemos mejorar de la plataforma?"
            value={comment}
          />
          <Buttons>
            <Button onClick={() => submitForm()}>Enviar</Button>
            {display ? (
              <MessageWrapper>
                <Icon icon={icon} />
                <Alert>{message}</Alert>
              </MessageWrapper>
            ) : null}
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

const mapDispatchToProps = (dispatch) => ({
  sendForm: (data) => dispatch(sendFormStart(data)),
});

export default connect(null, mapDispatchToProps)(FeedbackPage);
