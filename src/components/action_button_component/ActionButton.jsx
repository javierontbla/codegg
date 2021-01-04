import React from "react";

import { ActionButtonContainer } from "./ActionButton_styles";

const ActionButton = ({ action }) => {
  return (
    <>
      <ActionButtonContainer>{action}</ActionButtonContainer>
    </>
  );
};

export default ActionButton;
