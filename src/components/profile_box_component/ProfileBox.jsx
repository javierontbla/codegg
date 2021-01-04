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

const ProfileBox = ({ profile_image, user, date }) => {
  moment.locale("en");

  return (
    <>
      <Container>
        <ProfileBoxContainer>
          <ProfileImage profile_image={profile_image} />
          <InformationContainer>
            <User>{user}</User>
            <Date>{moment(date.toDate()).startOf("hour").fromNow()}</Date>
          </InformationContainer>
        </ProfileBoxContainer>
      </Container>
    </>
  );
};

export default ProfileBox;
