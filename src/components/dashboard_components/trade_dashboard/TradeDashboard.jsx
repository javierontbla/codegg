import React, { useState } from "react";
import { connect } from "react-redux";

import {
  Container,
  SymbolInput,
  ActionButtonContainer,
  TopContainer,
  PreviewContainer,
  CloseIcon,
  ChangeIcon,
  MiddleContainer,
  ActionOverlay,
  Action,
  ActionChange,
  ActionContainer,
  LeftText,
  RightInput,
  OptionContainer,
  BottomContainer,
  PublishContainer,
  DropDownIconContainer,
  DropDownIcon,
  PublishButton,
  DropDownMenu,
} from "./TradeDashboard_styles";
import { create_trade_card_start_action } from "../../../redux/dashboards/actions";
import ActionButton from "../../action_button_component/ActionButton";
import ChangeIconSVG from "./media/change_button.svg";
import CloseIconSVG from "./media/close_button.svg";
import DropDownSVG from "./media/dropdown_button.svg";

const TradeDashboard = ({
  create_trade_card,
  active_user_database,
  latest_trades,
}) => {
  const [active_dashboard, set_active_dashboard] = useState(false); // open-close trade dashboard
  const [symbol, set_symbol] = useState("");
  const [action, set_action] = useState("buy");
  const [company, set_company] = useState("");
  const [number_of_shares, set_number_of_shares] = useState("");
  const [price_per_share, set_price_per_share] = useState("");
  const [publish_mode, set_publish_mode] = useState("Public");
  const [dropdown_active, set_dropdown_active] = useState(false);

  const display_trade_card_action = () => {
    set_active_dashboard((prev_state) => !prev_state);
  };

  const handle_trade_card_action = () => {
    if (action === "buy") set_action("sell");
    else set_action("buy");
  };

  const handle_trade_card_fields = (hook, content) => {
    hook(content);
  };

  const upload_trade_card_to_firebase = (publish_mode) => {
    if (!symbol || !company || !number_of_shares || !price_per_share) return;

    create_trade_card({
      trade_content: {
        username: active_user_database.user_data.username,
        user_id: active_user_database.user_data.user_id,
        symbol,
        action,
        company,
        number_of_shares,
        price_per_share,
        premium: publish_mode === "Premium" ? true : false,
      },
      latest_trades,
    });

    // cleaning inputs
    set_symbol("");
    set_action("buy");
    set_company("");
    set_number_of_shares("");
    set_price_per_share("");
    set_publish_mode("Public");
  };

  const handle_publish_mode = (mode) => {
    set_publish_mode(mode);
    set_dropdown_active(false);
  };

  const handle_dropdown = () => {
    set_dropdown_active((prev_state) => !prev_state);
  };

  return (
    <>
      <Container>
        <TopContainer active_dashboard={active_dashboard}>
          <PreviewContainer active_dashboard={active_dashboard}>
            <SymbolInput
              placeholder="Artist"
              type="text"
              maxLength="9"
              value={symbol}
              onChange={(e) =>
                handle_trade_card_fields(set_symbol, e.target.value)
              }
            />
            <ActionButtonContainer
              active_dashboard={active_dashboard}
              onClick={() => display_trade_card_action()}
            >
              {active_dashboard ? (
                <CloseIcon src={CloseIconSVG} />
              ) : (
                <ActionButton action={"Publish"} />
              )}
            </ActionButtonContainer>
          </PreviewContainer>
          <ActionContainer active_dashboard={active_dashboard}>
            <ActionOverlay>
              <Action action={action}>{action.toLowerCase()}</Action>
            </ActionOverlay>
            <ActionChange onClick={() => handle_trade_card_action()}>
              <ChangeIcon src={ChangeIconSVG} />
            </ActionChange>
          </ActionContainer>
        </TopContainer>
        <MiddleContainer active_dashboard={active_dashboard}>
          <OptionContainer first_container={"true"}>
            <LeftText>Company:</LeftText>
            <RightInput
              placeholder="Snowflake"
              type="text"
              maxLength="12"
              value={company}
              onChange={(e) =>
                handle_trade_card_fields(set_company, e.target.value)
              }
            />
          </OptionContainer>
          <OptionContainer>
            <LeftText>No. of Shares:</LeftText>
            <RightInput
              placeholder="1"
              type="number"
              value={number_of_shares}
              onChange={(e) =>
                handle_trade_card_fields(set_number_of_shares, e.target.value)
              }
            />
          </OptionContainer>
          <OptionContainer>
            <LeftText>Price per Share:</LeftText>
            <RightInput
              placeholder="$265"
              type="number"
              value={price_per_share}
              onChange={(e) =>
                handle_trade_card_fields(set_price_per_share, e.target.value)
              }
            />
          </OptionContainer>
        </MiddleContainer>
        <BottomContainer active_dashboard={active_dashboard}>
          <PublishContainer>
            <PublishButton
              onClick={() => upload_trade_card_to_firebase(publish_mode)}
            >
              {publish_mode}
            </PublishButton>
            <DropDownIconContainer onClick={() => handle_dropdown()}>
              <DropDownIcon src={DropDownSVG} />
            </DropDownIconContainer>
            <DropDownMenu
              dropdown_active={dropdown_active}
              onClick={() =>
                handle_publish_mode(
                  publish_mode === "Public" ? "Premium" : "Public"
                )
              }
            >
              {publish_mode === "Public" ? "Premium" : "Public"}
            </DropDownMenu>
          </PublishContainer>
        </BottomContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  home_page_reducer: { latest_trades },
  dashboards_reducer: { current_drop_down_selection_trade },
  user_reducer: { active_user_database },
}) => ({
  current_drop_down_selection_trade,
  active_user_database,
  latest_trades,
});

const mapDispatchToProps = (dispatch) => ({
  create_trade_card: (trade_card) =>
    dispatch(create_trade_card_start_action(trade_card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeDashboard);
