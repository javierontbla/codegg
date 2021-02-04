import React from "react";
import { connect } from "react-redux";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import {
  Container,
  ModalContainer,
  Title,
  CloseButton,
  LogIn,
  Icon,
} from "./Modal_styles";
import { close_modal_action } from "../../redux/modal/actions";
import { google_provider, auth } from "../../firebase/firebase";
import CloseIconSVG from "./media/close_button.svg";

const Modal = ({ modal, close_modal }) => {
  const log_in = () => {
    auth.signInWithPopup(google_provider);
    close_modal();
  };

  return (
    <>
      <Container modal={modal}>
        <ModalContainer>
          <Title>
            LOG IN
            <CloseButton src={CloseIconSVG} onClick={() => close_modal()} />
          </Title>
          <LogIn onClick={() => log_in()}>
            <Icon icon={faGoogle} />
            Continue with Google
          </LogIn>
        </ModalContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({ modal_reducer: { modal } }) => ({
  modal,
});

const mapDispatchToProps = (dispatch) => ({
  close_modal: () => dispatch(close_modal_action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
