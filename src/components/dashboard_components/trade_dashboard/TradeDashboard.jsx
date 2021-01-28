import React, { useState } from "react";
import { connect } from "react-redux";

import ActionButton from "../../action_button_component/ActionButton";
import Spinner from "../../spinner_component/Spinner";
import ErrorDashboard from "../../error_components/error_dashboard_component/ErrorDashboard";
import {
  Container,
  TitleInput,
  CloseIcon,
  TopContainer,
  PreviewContainer,
  MiddleContainer,
  ImageInput,
  ImageContainer,
  AddIcon,
  TextInput,
  BottomContainer,
  ActionButtonContainer,
} from "./TradeDashboard_styles";
import { create_trade_card_start_action } from "../../../redux/dashboards/actions";
import CloseIconSVG from "./media/close_button.svg";
import AddIconSVG from "./media/add_button.svg";
import ActiveIconSVG from "./media/image_active.svg";

const TradeDashboard = ({
  create_recommended_card,
  user_firebase,
  loading_recommended_card,
  upload_recommended_card_error,
  latest_trades,
}) => {
  const [active_dashboard, set_active_dashboard] = useState(false); // open-close trade dashboard
  const [title, set_title] = useState("");
  const [image, set_image] = useState(null);
  const [description, set_description] = useState("");

  const display_trade_card_action = () => {
    set_active_dashboard((prev_state) => !prev_state);
  };

  const handle_recommended_card_fields = (hook, content) => {
    hook(content);
  };

  const handle_input_image = (file) => {
    if (file.length !== 1) return; // need to set error message here

    const file_type = file[0].type.split("/")[0];
    if (file_type !== "image") return; // check if file is an image

    set_image(file[0]);
  };

  const upload_recommended_card_to_firebase = () => {
    if (!title || !image || !description) return;

    if (user_firebase) {
      create_recommended_card({
        username: user_firebase.user_data.username,
        user_id: user_firebase.user_data.user_id,
        title,
        description,
        image,
        latest_trades,
      });

      // cleaning inputs
      set_title("");
      set_image(null);
      set_description("");
    } else {
      console.log("NO USER");
    }
  };

  return (
    <>
      <Container>
        <TopContainer active_dashboard={active_dashboard}>
          <PreviewContainer active_dashboard={active_dashboard}>
            <TitleInput
              placeholder="Artist"
              maxLength="20"
              value={title}
              onChange={(e) =>
                handle_recommended_card_fields(set_title, e.target.value)
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
          <ImageInput
            id="image-input"
            type="file"
            onClick={(e) => (e.target.value = null)}
            onChange={(e) => handle_input_image(e.target.files)}
          />
          <ImageContainer htmlFor="image-input">
            {image ? (
              <AddIcon active="true" src={ActiveIconSVG} />
            ) : (
              <AddIcon src={AddIconSVG} />
            )}
          </ImageContainer>
          <TextInput
            value={description}
            minRows="1"
            placeholder="Share your favorite artist/album/song with the community (don't forget to add an image)"
            onChange={(e) =>
              handle_recommended_card_fields(set_description, e.target.value)
            }
          />
        </MiddleContainer>
        <BottomContainer active_dashboard={active_dashboard}>
          <ActionButtonContainer
            onClick={() => upload_recommended_card_to_firebase()}
          >
            {loading_recommended_card ? <Spinner /> : null}
            <ActionButton action={"Publish"} />
          </ActionButtonContainer>
        </BottomContainer>
      </Container>
      {upload_recommended_card_error ? <ErrorDashboard /> : null}
    </>
  );
};

// redux
const mapStateToProps = ({
  home_page_reducer: { latest_trades },
  dashboards_reducer: {
    loading_recommended_card,
    upload_recommended_card_error,
  },
  user_reducer: { user_firebase },
}) => ({
  user_firebase,
  loading_recommended_card,
  upload_recommended_card_error,
  latest_trades,
});

const mapDispatchToProps = (dispatch) => ({
  create_recommended_card: (trade_card) =>
    dispatch(create_trade_card_start_action(trade_card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeDashboard);
