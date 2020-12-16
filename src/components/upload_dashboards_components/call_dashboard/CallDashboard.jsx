import React from "react";

import {
  CallDashboardContainer,
  TitleInputContainer,
  CreateButton,
} from "./CallDashboard_styles";

const CallDashboard = () => {
  return (
    <>
      <CallDashboardContainer>
        <TitleInputContainer placeholder="S&P500" />
        <CreateButton>Create Call</CreateButton>
      </CallDashboardContainer>
    </>
  );
};

export default CallDashboard;
