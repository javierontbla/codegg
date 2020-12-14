import React from "react";

import {
  PostDashboardContainer,
  TextInputContainer,
  ButtonsContainer,
  MediaContainer,
  UploadImageContainer,
  PublishActionsContainer,
  PostButton,
  Icon,
} from "./PostDashboard_styles";
import Camera from "../media/camera.svg";

const PostDashboard = () => {
  return (
    <>
      <PostDashboardContainer>
        <TextInputContainer placeholder="What do you want to share?" />
        <ButtonsContainer>
          <MediaContainer>
            <UploadImageContainer>
              <Icon src={Camera} />
            </UploadImageContainer>
          </MediaContainer>
          <PublishActionsContainer>
            <PostButton>Public Post</PostButton>
            <PostButton private={"true"}>Private Post</PostButton>
          </PublishActionsContainer>
        </ButtonsContainer>
      </PostDashboardContainer>
    </>
  );
};

export default PostDashboard;
