import React, { useState, useRef } from "react";
import { connect } from "react-redux";

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
} from "./TradeDashboard_styles";
import { create_trade_card_start_action } from "../../../redux/dashboards/actions";
import PublishButton from "../../publish_button_component/PublishButton";
import ChangeIconSVG from "./media/change_button.svg";
import CloseIconSVG from "./media/close_button.svg";

const TradeDashboard = ({
  current_drop_down_selection_trade,
  create_trade_card,
  active_user_database,
}) => {
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
    if (!isNaN(content)) {
      call_card_fields.current[subtitle] = parseFloat(content);
    } else {
      call_card_fields.current[subtitle] = content;
    }
  };

  const create_call_card = () => {
    call_card_fields.current["username"] =
      active_user_database.user_data.username;
    create_trade_card(call_card_fields.current);
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
          <OptionContainer first_container={"true"}>
            <Subtitle>Compañia:</Subtitle>
            <SubtitleInput
              placeholder="Tesla"
              type="text"
              maxLength="12"
              value={call_card_fields.current.company}
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
          <PublishButton
            launch_firebase_action={() => create_call_card()}
            current_drop_down_selection_trade={
              current_drop_down_selection_trade
            }
            current_drop_down_selection_post={false}
          />
        </BottomContainer>
      </CallDashboardContainer>
    </>
  );
};

// redux
const mapStateToProps = ({
  dashboards_reducer: { current_drop_down_selection_trade },
  user_reducer: { active_user_database },
}) => ({ current_drop_down_selection_trade, active_user_database });

const mapDispatchToProps = (dispatch) => ({
  create_trade_card: (trade_card) =>
    dispatch(create_trade_card_start_action(trade_card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeDashboard);
