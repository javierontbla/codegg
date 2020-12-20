import React, { useState } from "react";

import {
  CallDashboardContainer,
  SymbolInputContainer,
  CreateButton,
  TopContainer,
  PreviewContainer,
  CloseIcon,
  ChangeIcon,
  MiddleContainer,
  ActionOverlay,
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
import CloseIconSVG from "./media/close_button.svg";

const CallDashboard = () => {
  const [active_dashboard, set_active_dashboard] = useState(false);
  const [current_action, set_current_action] = useState("compra");

  const display_call_dashboard = () => {
    set_active_dashboard((prev_state) => !prev_state);
  };

  const change_action = () => {
    if (current_action === "compra") set_current_action("venta");
    else set_current_action("compra");
  };

  return (
    <>
      <CallDashboardContainer>
        <TopContainer active_dashboard={active_dashboard}>
          <PreviewContainer active_dashboard={active_dashboard}>
            <SymbolInputContainer
              placeholder="TSLA"
              type="text"
              maxLength="9"
            />
            <CreateButton
              active_dashboard={active_dashboard}
              onClick={() => display_call_dashboard()}
            >
              {active_dashboard ? (
                <CloseIcon src={CloseIconSVG} />
              ) : (
                `Crear Operación`
              )}
            </CreateButton>
          </PreviewContainer>
          <ActionContainer active_dashboard={active_dashboard}>
            <ActionOverlay>
              <Action action={current_action}>
                {current_action.toUpperCase()}
              </Action>
            </ActionOverlay>
            <ActionChange onClick={() => change_action()}>
              <ChangeIcon src={ChangeIconSVG} />
            </ActionChange>
          </ActionContainer>
        </TopContainer>
        <MiddleContainer active_dashboard={active_dashboard}>
          <OptionContainer>
            <Subtitle>Compañia:</Subtitle>
            <SubtitleInput placeholder="Tesla" type="text" maxLength="12" />
          </OptionContainer>
          <OptionContainer>
            <Subtitle>Cantidad de Acciones:</Subtitle>
            <SubtitleInput placeholder="5" type="number" max="999" />
          </OptionContainer>
          <OptionContainer>
            <Subtitle>Precio p/ Acción:</Subtitle>
            <SubtitleInput placeholder="$695" type="number" max="999" />
          </OptionContainer>
          <CommentInput placeholder="¿Algún comentario? (Opcional)" />
        </MiddleContainer>
        <BottomContainer active_dashboard={active_dashboard}>
          <PostButton>Pública</PostButton>
          <PostButton premium={"true"}>Premium</PostButton>
        </BottomContainer>
      </CallDashboardContainer>
    </>
  );
};

export default CallDashboard;
