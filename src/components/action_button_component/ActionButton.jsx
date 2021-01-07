import React from "react";

import { ActionButtonContainer } from "./ActionButton_styles";

const ActionButton = ({ action, navbar }) => {
  return (
    <>
      <ActionButtonContainer navbar={navbar}>{action}</ActionButtonContainer>
    </>
  );
};

export default ActionButton;
