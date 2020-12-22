import React, { useState, useRef } from "react";

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
  const call_card_fields = useRef({
    action: current_action,
  });

  const display_call_card_dashboard = () => {
    set_active_dashboard((prev_state) => !prev_state);
  };

  const handle_call_card_action = () => {
    if (current_action === "compra") {
      set_current_action("venta");
      call_card_fields.current["action"] = "venta";
    } else {
      set_current_action("compra");
      call_card_fields.current["action"] = "compra";
    }
  };

  const handle_call_card_fields = (subtitle, content) => {
    call_card_fields.current[`${subtitle}`] = `${content}`;
  };

  const create_call_card = () => {
    console.log(call_card_fields);
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
              onChange={(e) =>
                handle_call_card_fields("symbol", e.target.value)
              }
            />
            <CreateButton
              active_dashboard={active_dashboard}
              onClick={() => display_call_card_dashboard()}
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
                {current_action.toLowerCase()}
              </Action>
            </ActionOverlay>
            <ActionChange onClick={() => handle_call_card_action()}>
              <ChangeIcon src={ChangeIconSVG} />
            </ActionChange>
          </ActionContainer>
        </TopContainer>
        <MiddleContainer active_dashboard={active_dashboard}>
          <OptionContainer>
            <Subtitle>Compañia:</Subtitle>
            <SubtitleInput
              placeholder="Tesla"
              type="text"
              maxLength="12"
              onChange={(e) =>
                handle_call_card_fields("company", e.target.value)
              }
            />
          </OptionContainer>
          <OptionContainer>
            <Subtitle>Cantidad de Acciones:</Subtitle>
            <SubtitleInput
              placeholder="5"
              type="number"
              onChange={(e) =>
                handle_call_card_fields("number_of_shares", e.target.value)
              }
            />
          </OptionContainer>
          <OptionContainer>
            <Subtitle>Precio p/ Acción:</Subtitle>
            <SubtitleInput
              placeholder="$695"
              type="number"
              onChange={(e) =>
                handle_call_card_fields("price_per_share", e.target.value)
              }
            />
          </OptionContainer>
          <CommentInput
            placeholder="¿Algún comentario? (Opcional)"
            type="text"
            maxLength="24"
            onChange={(e) => handle_call_card_fields("comment", e.target.value)}
          />
        </MiddleContainer>
        <BottomContainer active_dashboard={active_dashboard}>
          <PostButton onClick={() => create_call_card()}>Pública</PostButton>
          <PostButton premium={"true"}>Premium</PostButton>
        </BottomContainer>
      </CallDashboardContainer>
    </>
  );
};

export default CallDashboard;
