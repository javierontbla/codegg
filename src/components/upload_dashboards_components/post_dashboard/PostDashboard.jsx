import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import {
  PostDashboardContainer,
  TextInputContainer,
  ButtonsContainer,
  LeftContainer,
  CameraContainer,
  ImageInput,
  CameraIcon,
  ImageActiveContainer,
  ImageActiveIcon,
  RightContainer,
  PublishButton,
} from "./PostDashboard_styles";
import { create_post_card_start_action } from "../../../redux/dashboards/actions";
import Camera from "./media/image_button.svg";
import ImageActive from "./media/image_active.svg";

const PostDashboard = ({ create_post_card, posts }) => {
  const [current_rows, set_current_rows] = useState(1);
  const [image_active, set_image_active] = useState(false);

  const post_card_fields = useRef({
    description: null,
    image: null,
  });

  const handle_input_rows = (rows) => {
    set_current_rows(rows);
  };

  const handle_input_text = (text) => {
    post_card_fields.current.description = text;
  };

  const handle_input_file = (file) => {
    if (file.length !== 1) return; // need to set error message here

    const file_type = file[0].type.split("/")[0];
    if (file_type !== "image") return; // check if file is an image

    post_card_fields.current.image = file[0];
    set_image_active(true);
  };

  const upload_post_card_to_firebase = () => {
    create_post_card({ post_content: post_card_fields.current, posts });
  };

  return (
    <>
      <PostDashboardContainer>
        <TextInputContainer
          placeholder="What do you want to share?"
          onFocus={() => handle_input_rows(3)}
          onBlur={() => handle_input_rows(1)}
          rows={current_rows}
          onChange={(e) => handle_input_text(e.target.value)}
        />
        <ButtonsContainer>
          <ImageInput
            id="file-input"
            type="file"
            onChange={(e) => handle_input_file(e.target.files)}
          />
          <LeftContainer>
            <CameraContainer htmlFor="file-input">
              <CameraIcon src={Camera} />
            </CameraContainer>
            <ImageActiveContainer image_active={image_active}>
              <ImageActiveIcon src={ImageActive} />
            </ImageActiveContainer>
          </LeftContainer>
          <RightContainer>
            <PublishButton onClick={() => upload_post_card_to_firebase()}>
              Upload
            </PublishButton>
          </RightContainer>
        </ButtonsContainer>
      </PostDashboardContainer>
    </>
  );
};

// redux
const mapStateToProps = ({ home_page_reducer: { posts } }) => ({
  posts,
});

const mapDispatchToProps = (dispatch) => ({
  create_post_card: (post_card) =>
    dispatch(create_post_card_start_action(post_card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDashboard);
