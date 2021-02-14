import React from "react";
import moment from "moment";

import {
  Container,
  HyperLink,
  ProfileBoxContainer,
  ProfileImage,
  InformationContainer,
  User,
  Date,
} from "./ProfileBox_styles";

const ProfileBox = ({
  user_id,
  profile_image,
  user,
  date,
  article_card_preview,
}) => {
  moment.locale("en");

  return (
    <>
      <Container>
        <ProfileBoxContainer>
          <HyperLink to={`/users/${user_id}`}>
            <ProfileImage
              profile_image={profile_image}
              article_card_preview={article_card_preview}
            />
          </HyperLink>
          <InformationContainer>
            <HyperLink to={`/users/${user_id}`}>
              <User article_card_preview={article_card_preview}>{user}</User>
            </HyperLink>
            <Date article_card_preview={article_card_preview}>
              {date ? moment(date.toDate()).format("LL") : null}
            </Date>
          </InformationContainer>
        </ProfileBoxContainer>
      </Container>
    </>
  );
};

export default ProfileBox;
