import React, { useState } from "react";
import { connect } from "react-redux";

import ActionButton from "../../action_button_component/ActionButton";
import Spinner from "../../spinner_component/Spinner";
import {
  Container,
  DescriptionInput,
  BottomContainer,
  LeftContainer,
  ImageIconContainer,
  ImageInput,
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
  user_firebase,
  loading_post_card,
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

    const { user, username, user_id, profile_image } = user_firebase.user_data;
    create_post_card({
      post_content: {
        user,
        username,
        user_id,
        profile_image,
        description,
        image,
      },
      posts,
    });

    // clearing fields
    set_description("");
    set_image(null);
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
            id="image-input"
            type="file"
            onClick={(e) => (e.target.value = null)}
            onChange={(e) => handle_input_image(e.target.files)}
          />
          <LeftContainer>
            <ImageIconContainer htmlFor="image-input">
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
    </>
  );
};

// redux
const mapStateToProps = ({
  home_page_reducer: { posts },
  user_reducer: { user_firebase },
  dashboards_reducer: { loading_post_card },
}) => ({
  posts,
  user_firebase,
  loading_post_card,
});

const mapDispatchToProps = (dispatch) => ({
  create_post_card: (post_card) =>
    dispatch(create_post_card_start_action(post_card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDashboard);
