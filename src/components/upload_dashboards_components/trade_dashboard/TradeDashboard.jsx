import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import {
  CallDashboardContainer,
  SymbolInputContainer,
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
  RightTextInput,
  CommentInput,
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
  const [comment, set_comment] = useState("");
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
    create_trade_card({
      new_trade_content: {
        username: active_user_database.user_data.username,
        symbol,
        action,
        company,
        number_of_shares,
        price_per_share,
        comment,
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
    set_comment("");
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
      <CallDashboardContainer>
        <TopContainer active_dashboard={active_dashboard}>
          <PreviewContainer active_dashboard={active_dashboard}>
            <SymbolInputContainer
              placeholder="SNOW"
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
                <ActionButton action={"Create Trade"} />
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
            <RightTextInput
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
            <RightTextInput
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
            <RightTextInput
              placeholder="$265"
              type="number"
              value={price_per_share}
              onChange={(e) =>
                handle_trade_card_fields(set_price_per_share, e.target.value)
              }
            />
          </OptionContainer>
          <CommentInput
            placeholder="Any comment? (Optional)"
            type="text"
            maxLength="24"
            value={comment}
            onChange={(e) =>
              handle_trade_card_fields(set_comment, e.target.value)
            }
          />
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
      </CallDashboardContainer>
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
