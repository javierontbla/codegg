import React, { useState } from "react";

import {
  PublishButtonContainer,
  Publish,
  DropDownContainer,
  DropDownImage,
  DropDownMenu,
} from "./PublishButton_styles";
import DropDownButton from "./media/dropdown_button.svg";

const PublishButton = () => {
  const [
    current_drop_down_selection,
    set_current_drop_down_selection,
  ] = useState("Premium");
  const [display_drop_down, set_display_drop_down] = useState(false);

  const handle_drop_down = () => {
    set_display_drop_down((prev_state) => !prev_state);
  };

  const handle_drop_down_selection = () => {
    if (current_drop_down_selection === "Premium")
      set_current_drop_down_selection("Pública");
    if (current_drop_down_selection === "Pública")
      set_current_drop_down_selection("Premium");

    set_display_drop_down(false);
  };

  return (
    <>
      <PublishButtonContainer display_drop_down={display_drop_down}>
        <Publish>
          {current_drop_down_selection === "Premium" ? "Pública" : "Premium"}
        </Publish>
        <DropDownContainer onClick={() => handle_drop_down()}>
          <DropDownImage src={DropDownButton} />
        </DropDownContainer>
        <DropDownMenu
          display_drop_down={display_drop_down}
          onClick={() => handle_drop_down_selection()}
        >
          {current_drop_down_selection}
        </DropDownMenu>
      </PublishButtonContainer>
    </>
  );
};

export default PublishButton;
