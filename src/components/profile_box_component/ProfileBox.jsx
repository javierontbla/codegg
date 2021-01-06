import React from "react";
import moment from "moment";

import {
  Container,
  ProfileBoxContainer,
  ProfileImage,
  InformationContainer,
  User,
  Date,
} from "./ProfileBox_styles";

const ProfileBox = ({ profile_image, user, date, article_card_preview }) => {
  moment.locale("en");

  return (
    <>
      <Container>
        <ProfileBoxContainer>
          <ProfileImage
            profile_image={profile_image}
            article_card_preview={article_card_preview}
          />
          <InformationContainer>
            <User article_card_preview={article_card_preview}>{user}</User>
            <Date article_card_preview={article_card_preview}>
              {moment(date.toDate()).startOf("hour").fromNow()}
            </Date>
          </InformationContainer>
        </ProfileBoxContainer>
      </Container>
    </>
  );
};

export default ProfileBox;
