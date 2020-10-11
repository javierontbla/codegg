import React, { useState, useEffect } from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import {
  Wrapper,
  ContactBlock,
  Title,
  Subtitle,
  Input,
  Comment,
  Buttons,
  Button,
  Alert,
  Icon,
  MessageWrapper,
} from "./FeedbackPage.styles";
import { sendFormStart } from "../../redux/feedback.page/actions";

const FeedbackPage = ({ sendForm, error }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `codegg.tech | Feedback`;
  }, []);

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
        setIcon(null);
        setMessage("¡Enviado!");
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
            placeholder="¿Qué podemos mejorar en codegg.tech?"
            value={comment}
          />
          <Buttons>
            <Button onClick={() => submitForm()}>Enviar</Button>
            {display ? (
              !error ? (
                <MessageWrapper>
                  <Icon icon={icon} />
                  <Alert>{message}</Alert>
                </MessageWrapper>
              ) : (
                <MessageWrapper>
                  <Icon icon={icon} />
                  <Alert>hubo un error</Alert>
                </MessageWrapper>
              )
            ) : null}
          </Buttons>
        </ContactBlock>
      </Wrapper>
    </>
  );
};
const mapStateToProps = ({ feedbackPageReducer: { error } }) => ({
  error,
});
const mapDispatchToProps = (dispatch) => ({
  sendForm: (data) => dispatch(sendFormStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackPage);
