import React, { useState } from "react";

import {
  PostDashboardContainer,
  TextInputContainer,
  ButtonsContainer,
  UploadImageIconContainer,
  UploadImageIcon,
  Icon,
} from "./PostDashboard_styles";
import PublishButton from "../../publish_button_component/PublishButton";
import Camera from "./media/image_button.svg";

const PostDashboard = () => {
  const [current_rows, set_current_rows] = useState(1);

  const handle_input_rows = (rows) => {
    set_current_rows(rows);
  };

  return (
    <>
      <PostDashboardContainer>
        <TextInputContainer
          placeholder="¿Qué quieres compartir?"
          onFocus={() => handle_input_rows(3)}
          onBlur={() => handle_input_rows(1)}
          rows={current_rows}
        />
        <ButtonsContainer>
          <UploadImageIconContainer>
            <UploadImageIcon>
              <Icon src={Camera} />
            </UploadImageIcon>
          </UploadImageIconContainer>
          <PublishButton />
        </ButtonsContainer>
      </PostDashboardContainer>
    </>
  );
};

export default PostDashboard;
