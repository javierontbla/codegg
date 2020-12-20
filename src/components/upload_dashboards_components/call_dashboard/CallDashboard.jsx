import React, { useState } from "react";

import {
  CallDashboardContainer,
  SymbolInputContainer,
  CreateButton,
  TopContainer,
  PreviewContainer,
  ChangeIcon,
  MiddleContainer,
  Action,
  ActionChange,
  ActionContainer,
  Subtitle,
  SubtitleInput,
  CommentInput,
  OptionContainer,
  BottomContainer,
  PostButton,
} from "./CallDashboard_styles";
import ChangeIconSVG from "./media/change_button.svg";

const CallDashboard = () => {
  const [active_dashboard, set_active_dashboard] = useState(false);
  const [current_action, set_current_action] = useState("COMPRA");

  const display_call_dashboard = () => {
    set_active_dashboard((prev_state) => !prev_state);
  };

  return (
    <>
      <CallDashboardContainer>
        <TopContainer active_dashboard={active_dashboard}>
          <PreviewContainer>
            <SymbolInputContainer placeholder="S&P500" />
            <CreateButton onClick={() => display_call_dashboard()}>
              {active_dashboard ? `Cancelar` : `Crear Operación`}
            </CreateButton>
          </PreviewContainer>
          <ActionContainer active_dashboard={active_dashboard}>
            <Action>{current_action}</Action>
            <ActionChange>
              <ChangeIcon src={ChangeIconSVG} />
            </ActionChange>
          </ActionContainer>
        </TopContainer>
        <MiddleContainer active_dashboard={active_dashboard}>
          <OptionContainer>
            <Subtitle>Compañia:</Subtitle>
            <SubtitleInput placeholder="Snowflake" />
          </OptionContainer>
          <OptionContainer>
            <Subtitle>Cantidad de Acciones:</Subtitle>
            <SubtitleInput placeholder="5" />
          </OptionContainer>
          <OptionContainer>
            <Subtitle>Precio p/ Acción:</Subtitle>
            <SubtitleInput placeholder="$305" />
          </OptionContainer>
          <CommentInput placeholder="¿Algún comentario?" />
        </MiddleContainer>
        <BottomContainer active_dashboard={active_dashboard}>
          <PostButton>Público</PostButton>
          <PostButton premium={"true"}>Premium</PostButton>
        </BottomContainer>
      </CallDashboardContainer>
    </>
  );
};

export default CallDashboard;
