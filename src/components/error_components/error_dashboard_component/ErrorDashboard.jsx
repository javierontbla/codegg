import React from "react";
import { connect } from "react-redux";

import { Container, Error, CloseIcon } from "./ErrorDashboard_styles";
import CloseIconSVG from "../media/close_button.svg";
import {
  create_trade_card_failure_action,
  create_post_card_failure_action,
} from "../../../redux/dashboards/actions";

const ErrorDashboard = ({
  close_recommended_card_message,
  close_post_card_message,
  post,
}) => {
  const handle_close_error_messages = () => {
    if (post) {
      close_post_card_message(null);
    } else {
      close_recommended_card_message(null);
    }
  };
  return (
    <>
      <Container post={post}>
        <Error>No internet connection...</Error>
        <CloseIcon
          src={CloseIconSVG}
          onClick={() => handle_close_error_messages()}
        />
      </Container>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  close_recommended_card_message: (bool) =>
    dispatch(create_trade_card_failure_action(bool)),
  close_post_card_message: (bool) =>
    dispatch(create_post_card_failure_action(bool)),
});

export default connect(null, mapDispatchToProps)(ErrorDashboard);
