import React, { useState } from "react";
import { connect } from "react-redux";

import ActionButton from "../../action_button_component/ActionButton";
import {
  PostDashboardContainer,
  TextInputContainer,
  ButtonsContainer,
  LeftContainer,
  ImageContainer,
  ImageInput,
  ImageIcon,
  ImageActiveContainer,
  ImageActiveIcon,
  RightContainer,
  ActionButtonContainer,
} from "./PostDashboard_styles";
import Image from "./media/image_button.svg";
import ImageActive from "./media/image_active.svg";
import DropDownSVG from "./media/dropdown_button.svg";
import { create_post_card_start_action } from "../../../redux/dashboards/actions";

const PostDashboard = ({ create_post_card, posts, active_user_database }) => {
  const [rows, set_rows] = useState(1);

  const [description, set_description] = useState("");
  const [image, set_image] = useState(null);

  const [publish_mode, set_publish_mode] = useState("Public");
  const [dropdown_active, set_dropdown_active] = useState(false);

  const handle_input_rows = (rows) => {
    set_rows(rows);
  };

  const handle_input_description = (text) => {
    set_description(text);
  };

  const handle_input_image = (image) => {
    if (image.length !== 1) return; // need to set error message here

    const image_type = image[0].type.split("/")[0];
    if (image_type !== "image") return; // check if file is an image

    set_image(image[0]);
  };

  const handle_publish_mode = (mode) => {
    set_publish_mode(mode);
    set_dropdown_active(false);
  };

  const handle_dropdown = () => {
    set_dropdown_active((prev_state) => !prev_state);
  };

  const upload_post_card_to_firebase = () => {
    if (!description) return; // if there is no description

    const {
      user,
      username,
      user_id,
      profile_image,
    } = active_user_database.user_data;
    create_post_card({
      post_content: {
        user,
        username,
        user_id,
        profile_image,
        premium: publish_mode === "Premium" ? true : false,
        description,
        image,
      },
      posts,
    });

    // clearing fields
    set_description("");
    set_image(null);
    set_publish_mode("Public");
  };

  return (
    <>
      <PostDashboardContainer>
        <TextInputContainer
          placeholder="What do you want to share?"
          onFocus={() => handle_input_rows(3)}
          onBlur={() => handle_input_rows(1)}
          rows={rows}
          value={description}
          onChange={(e) => handle_input_description(e.target.value)}
        />
        <ButtonsContainer>
          <ImageInput
            id="image-input"
            type="file"
            onClick={(e) => (e.target.value = null)}
            onChange={(e) => handle_input_image(e.target.files)}
          />
          <LeftContainer>
            <ImageContainer htmlFor="image-input">
              <ImageIcon src={Image} />
            </ImageContainer>
            <ImageActiveContainer image={image}>
              <ImageActiveIcon src={ImageActive} />
            </ImageActiveContainer>
          </LeftContainer>
          <RightContainer>
            <ActionButtonContainer>
              <ActionButton action={"Publish"} />
            </ActionButtonContainer>
          </RightContainer>
        </ButtonsContainer>
      </PostDashboardContainer>
    </>
  );
};

// redux
const mapStateToProps = ({
  home_page_reducer: { posts },
  user_reducer: { active_user_database },
}) => ({
  posts,
  active_user_database,
});

const mapDispatchToProps = (dispatch) => ({
  create_post_card: (post_card) =>
    dispatch(create_post_card_start_action(post_card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDashboard);
