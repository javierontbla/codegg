import React, { useState, useRef } from "react";
import { connect } from "react-redux";

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
} from "./PostDashboard_styles";
import {
  PublishContainer,
  DropDownIconContainer,
  DropDownIcon,
  PublishButton,
  DropDownMenu,
} from "../trade_dashboard/TradeDashboard_styles";
import { create_post_card_start_action } from "../../../redux/dashboards/actions";
import Image from "./media/image_button.svg";
import ImageActive from "./media/image_active.svg";
import DropDownSVG from "./media/dropdown_button.svg";

const PostDashboard = ({ create_post_card, posts }) => {
  const [current_rows, set_current_rows] = useState(1);
  const [image_active, set_image_active] = useState(false);
  const [publish_mode, set_publish_mode] = useState("Public");
  const [dropdown_active, set_dropdown_active] = useState(false);

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

  const handle_publish_mode = (mode) => {
    set_publish_mode(mode);
    set_dropdown_active(false);
  };

  const handle_dropdown = () => {
    set_dropdown_active((prev_state) => !prev_state);
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
            <ImageContainer htmlFor="file-input">
              <ImageIcon src={Image} />
            </ImageContainer>
            <ImageActiveContainer image_active={image_active}>
              <ImageActiveIcon src={ImageActive} />
            </ImageActiveContainer>
          </LeftContainer>
          <RightContainer>
            <PublishContainer>
              <PublishButton
                onClick={() => upload_post_card_to_firebase(publish_mode)}
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
