import React, { useState } from "react";
import { connect } from "react-redux";

import ActionButton from "../../action_button_component/ActionButton";
import {
  Container,
  TitleInput,
  CloseIcon,
  TopContainer,
  PreviewContainer,
  MiddleContainer,
  ImageInput,
  AddIcon,
  TextInput,
  BottomContainer,
  ActionButtonContainer,
} from "./TradeDashboard_styles";
import { create_trade_card_start_action } from "../../../redux/dashboards/actions";
import CloseIconSVG from "./media/close_button.svg";
import AddIconSVG from "./media/add_button.svg";

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

  const display_trade_card_action = () => {
    set_active_dashboard((prev_state) => !prev_state);
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
  };

  return (
    <>
      <Container>
        <TopContainer active_dashboard={active_dashboard}>
          <PreviewContainer active_dashboard={active_dashboard}>
            <TitleInput
              placeholder="Artist"
              type="text"
              maxLength="20"
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
                <ActionButton action={"Create"} />
              )}
            </ActionButtonContainer>
          </PreviewContainer>
        </TopContainer>
        <MiddleContainer active_dashboard={active_dashboard}>
          <ImageInput>
            <AddIcon src={AddIconSVG} />
          </ImageInput>
          <TextInput
            minRows="1"
            placeholder="Share your favorite artist/album/song with the community (don't forget to add an image)"
          />
        </MiddleContainer>
        <BottomContainer active_dashboard={active_dashboard}>
          <ActionButtonContainer>
            <ActionButton action={"Publish"} />
          </ActionButtonContainer>
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
