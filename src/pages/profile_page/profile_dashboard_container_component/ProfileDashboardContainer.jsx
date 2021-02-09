import React, { useEffect, useState } from "react";
import { useRouteMatch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ProfileDashboard from "../profile_dashboard_component/ProfileDashboard";
import { request_profile_start_action } from "../../../redux/profile_page/actions";

const ProfileDashboardContainer = ({
  loading_profile,
  user_firebase,
  request_profile,
  profile,
}) => {
  const {
    params: { user_id },
  } = useRouteMatch();
  const [redirect, set_redirect] = useState(false);

  useEffect(() => {
    if (user_firebase) {
      if (user_firebase.user_data.user_id === user_id) {
        request_profile({ user_id });
      } else {
        set_redirect(true);
      }
    } else {
      set_redirect(true);
    }
  }, [user_firebase]);

  return (
    <>
      {redirect ? (
        <Redirect to="/" />
      ) : loading_profile ? null : (
        <ProfileDashboard user_id={user_id} data={profile[0]} id={profile[1]} />
      )}
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { user_firebase },
  profile_page_reducer: { loading_profile, profile },
}) => ({
  loading_profile,
  profile,
  user_firebase,
});

const mapDispatchToProps = (dispatch) => ({
  request_profile: (user_id) => dispatch(request_profile_start_action(user_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDashboardContainer);
