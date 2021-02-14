import React from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import Rank from "../../../components/rank_component/Rank";
import {
  Container,
  TopContainer,
  CoverImage,
  ProfileImage,
  CoverImageInput,
  ProfileImageInput,
  CoverImageLabel,
  ProfileImageLabel,
  Icon,
  MiddleContainer,
  RankContainer,
  User,
  Username,
  Description,
  BottomContainer,
  Subscribers,
} from "./ProfileCard_styles";
import { update_profile_image_start_action } from "../../../redux/profile_page/actions";

const ProfileCard = ({ data, udpate_image }) => {
  const update_image_to_firebase = (image) => {
    udpate_image(image);
  };

  const handle_cover_image_input = (image) => {
    if (image.length !== 1) return; // need to set error message here

    const image_type = image[0].type.split("/")[0];
    if (image_type !== "image") return; // check if file is an image

    update_image_to_firebase({
      user_id: data.user_id,
      field: "cover_image",
      image: image[0],
    });
  };

  const handle_profile_image_input = (image) => {
    if (image.length !== 1) return; // need to set error message here

    const image_type = image[0].type.split("/")[0];
    if (image_type !== "image") return; // check if file is an image

    update_image_to_firebase({
      user_id: data.user_id,
      field: "profile_image",
      image: image[0],
    });
  };

  return (
    <>
      <Container>
        <TopContainer>
          <CoverImageInput
            type="file"
            id="cover-img"
            onChange={(e) => handle_cover_image_input(e.target.files)}
            onClick={(e) => (e.target.value = null)}
          />
          <ProfileImageInput
            type="file"
            id="profile-img"
            onChange={(e) => handle_profile_image_input(e.target.files)}
            onClick={(e) => (e.target.value = null)}
          />
          <CoverImage cover_image={data.cover_image}>
            <CoverImageLabel htmlFor="cover-img">
              <Icon icon={faPen} />
            </CoverImageLabel>
          </CoverImage>
          <ProfileImage profile_image={data.profile_image}>
            <ProfileImageLabel htmlFor="profile-img">
              <Icon icon={faPen} />
            </ProfileImageLabel>
          </ProfileImage>
        </TopContainer>
        <MiddleContainer>
          <RankContainer>
            <Rank badge={data.rank} />
          </RankContainer>
          <User>{data.user}</User>
          <Username>@{data.username}</Username>
          <Description>{data.description}</Description>
        </MiddleContainer>
        <BottomContainer>
          <Subscribers>{data.subscribers} subscribers</Subscribers>
        </BottomContainer>
      </Container>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  udpate_image: (image) => dispatch(update_profile_image_start_action(image)),
});

export default connect(null, mapDispatchToProps)(ProfileCard);
