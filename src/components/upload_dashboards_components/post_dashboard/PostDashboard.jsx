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
import Camera from "./media/image_button.svg";
import Video from "./media/video_button.svg";

const PostDashboard = () => {
  return (
    <>
      <PostDashboardContainer>
        <TextInputContainer placeholder="¿Qué quieres compartir?" />
        <ButtonsContainer>
          <MediaContainer>
            <UploadImageContainer>
              <Icon src={Camera} />
            </UploadImageContainer>
          </MediaContainer>
          <PublishActionsContainer>
            <PostButton>Pública</PostButton>
            <PostButton private={"true"}>Premium</PostButton>
          </PublishActionsContainer>
        </ButtonsContainer>
      </PostDashboardContainer>
    </>
  );
};

export default PostDashboard;
