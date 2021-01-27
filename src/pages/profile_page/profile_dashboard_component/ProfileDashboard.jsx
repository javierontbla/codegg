import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

import Title from "../../../components/title_component/Title";
import ProfileCard from "../profile_card_component/ProfileCard";
import {
  Container,
  LeftContainer,
  RightContainer,
  StatisticsContainer,
} from "./ProfileDashboard_styles";
import { request_profile_start_action } from "../../../redux/profile_page/actions";

const ProfileDashboard = ({ request_profile, profile, user_firebase }) => {
  const {
    params: { user_id },
  } = useRouteMatch();
  useEffect(() => {
    if (user_firebase) {
      if (user_firebase.user_data.user_id === user_id) {
        request_profile({ user_id });
      }
    }
  }, [user_firebase]);
  return (
    <>
      <Container>
        <LeftContainer>
          {profile.length > 0 ? (
            <ProfileCard data={profile[0]} id={profile[1]} />
          ) : null}
        </LeftContainer>
        <RightContainer>
          <Title title="Statistics" />
          <StatisticsContainer></StatisticsContainer>
        </RightContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { user_firebase },
  profile_page_reducer: { profile },
}) => ({
  profile,
  user_firebase,
});

const mapDispatchToProps = (dispatch) => ({
  request_profile: (user_id) => dispatch(request_profile_start_action(user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDashboard);
