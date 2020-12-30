import React, { useState } from "react";
import { connect } from "react-redux";

import {
  PublishButtonContainer,
  Publish,
  DropDownContainer,
  DropDownImage,
  DropDownMenu,
} from "./PublishButton_styles";
import DropDownButton from "./media/dropdown_button.svg";
import {
  change_drop_down_selection_trade_action,
  change_drop_down_selection_post_action,
} from "../../redux/dashboards/actions";

const PublishButton = ({
  current_drop_down_selection_trade,
  current_drop_down_selection_post,
  change_drop_down_selection_trade,
  change_drop_down_selection_post,
}) => {
  const [display_drop_down, set_display_drop_down] = useState(false);

  const handle_drop_down = () => {
    set_display_drop_down((prev_state) => !prev_state);
  };

  const handle_drop_down_selection = () => {
    if (current_drop_down_selection_trade) {
      if (current_drop_down_selection_trade === "Pública")
        change_drop_down_selection_trade("Premium");
      if (current_drop_down_selection_trade === "Premium")
        change_drop_down_selection_trade("Pública");
    }

    if (current_drop_down_selection_post) {
      if (current_drop_down_selection_post === "Pública")
        change_drop_down_selection_post("Premium");
      if (current_drop_down_selection_post === "Premium")
        change_drop_down_selection_post("Pública");
    }

    set_display_drop_down(false);
  };

  return (
    <>
      <PublishButtonContainer display_drop_down={display_drop_down}>
        <Publish>
          {current_drop_down_selection_post ||
            current_drop_down_selection_trade}
        </Publish>
        <DropDownContainer onClick={() => handle_drop_down()}>
          <DropDownImage src={DropDownButton} />
        </DropDownContainer>
        <DropDownMenu
          display_drop_down={display_drop_down}
          onClick={() => handle_drop_down_selection()}
        >
          {(current_drop_down_selection_trade ||
            current_drop_down_selection_post) === "Pública"
            ? "Premium"
            : "Pública"}
        </DropDownMenu>
      </PublishButtonContainer>
    </>
  );
};

// redux
const mapDispatchToProps = (dispatch) => ({
  change_drop_down_selection_trade: (value) =>
    dispatch(change_drop_down_selection_trade_action(value)),
  change_drop_down_selection_post: (value) =>
    dispatch(change_drop_down_selection_post_action(value)),
});

export default connect(null, mapDispatchToProps)(PublishButton);
