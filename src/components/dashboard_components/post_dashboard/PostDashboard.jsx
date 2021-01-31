import React, { useState } from "react";
import { connect } from "react-redux";

import ActionButton from "../../action_button_component/ActionButton";
import Spinner from "../../spinner_component/Spinner";
import ErrorDashboard from "../../error_components/error_dashboard_component/ErrorDashboard";
import {
  Container,
  DescriptionInput,
  BottomContainer,
  LeftContainer,
  ImageInput,
  ImageIconContainer,
  ImageIcon,
  ImageActiveContainer,
  ImageActiveIcon,
  RightContainer,
  ActionButtonContainer,
} from "./PostDashboard_styles";
import { create_post_card_start_action } from "../../../redux/dashboards/actions";
import ImageIconSVG from "./media/image_button.svg";
import ImageActiveSVG from "./media/image_active_button.svg";

const PostDashboard = ({
  create_post_card,
  posts,
  last_post,
  user_firebase,
  loading_post_card,
  upload_post_card_error,
}) => {
  const [description, set_description] = useState("");
  const [image, set_image] = useState(null);

  const handle_input_description = (text) => {
    set_description(text);
  };

  const handle_input_image = (image) => {
    if (image.length !== 1) return; // need to set error message here

    const image_type = image[0].type.split("/")[0];
    if (image_type !== "image") return; // check if file is an image

    set_image(image[0]);
  };

  const upload_post_card_to_firebase = () => {
    if (!description) return; // if there is no description
    if (user_firebase) {
      const {
        user,
        username,
        user_id,
        profile_image,
      } = user_firebase.user_data;
      create_post_card({
        user,
        username,
        user_id,
        profile_image,
        description,
        post_image: image,
        posts,
        last_post,
      });

      // clearing fields
      set_description("");
      set_image(null);
    } else {
      // user isn't logged in
    }
  };

  return (
    <>
      <Container>
        <DescriptionInput
          placeholder="Share anything you want!"
          minRows="1"
          value={description}
          onChange={(e) => handle_input_description(e.target.value)}
        />
        <BottomContainer>
          <ImageInput
            id="image_id"
            type="file"
            onChange={(e) => handle_input_image(e.target.files)}
            onClick={(e) => (e.target.value = null)}
          />
          <LeftContainer>
            <ImageIconContainer htmlFor="image_id">
              <ImageIcon src={ImageIconSVG} />
            </ImageIconContainer>
            <ImageActiveContainer image={image}>
              <ImageActiveIcon src={ImageActiveSVG} />
            </ImageActiveContainer>
          </LeftContainer>
          <RightContainer>
            <ActionButtonContainer
              onClick={() => upload_post_card_to_firebase()}
            >
              {loading_post_card ? <Spinner /> : null}
              <ActionButton action={"Publish"} />
            </ActionButtonContainer>
          </RightContainer>
        </BottomContainer>
      </Container>
      {upload_post_card_error ? <ErrorDashboard post="true" /> : null}
    </>
  );
};

// redux
const mapStateToProps = ({
  home_page_reducer: { posts, last_post },
  user_reducer: { user_firebase },
  dashboards_reducer: { loading_post_card, upload_post_card_error },
}) => ({
  posts,
  last_post,
  user_firebase,
  loading_post_card,
  upload_post_card_error,
});

const mapDispatchToProps = (dispatch) => ({
  create_post_card: (post_card) =>
    dispatch(create_post_card_start_action(post_card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDashboard);
