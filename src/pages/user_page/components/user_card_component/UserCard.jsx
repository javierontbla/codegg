import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Rank from "../../../../components/rank_component/Rank";
import ActionButton from "../../../../components/action_button_component/ActionButton";
import {
  Container,
  TopContainer,
  CoverImage,
  ProfileImage,
  RankContainer,
  User,
  Username,
  MiddleContainer,
  Description,
  BottomContainer,
  ActionButtonContainer,
  Subscribers,
} from "./UserCard_styles";
import { subscribe_async } from "../../../../firebase/functions/subscribe";
import { validate_subscriber_success_action } from "../../../../redux/user_page/actions";

const UserCard = ({
  user_firebase,
  data,
  id,
  subscriber,
  update_subscribe_button,
}) => {
  const [subscribers, set_subscribers] = useState(data.subscribers);
  const subscribe_ref = useRef(false);

  useEffect(() => {
    document.title = `Codegg - @${data.username}`;
  }, []);

  const subscribe_to_firebase = async () => {
    if (user_firebase) {
      if (subscribe_ref.current === true) return;

      if (subscriber) update_subscribe_button(false);
      else update_subscribe_button(true);

      subscribe_ref.current = true; // start
      const updated_subscribers = await subscribe_async({
        user_id: id,
        subscriber_id: user_firebase.user_data.user_id,
      });

      set_subscribers(updated_subscribers);
      subscribe_ref.current = false; // end
    } else {
      // user isn't logged in
      // fire Modal
    }
  };

  return (
    <>
      <Container>
        <TopContainer>
          <CoverImage cover_image={data.cover_image} />
          <ProfileImage profile_image={data.profile_image} />
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
          <Subscribers>{subscribers} subscribers</Subscribers>
          <ActionButtonContainer onClick={() => subscribe_to_firebase()}>
            <ActionButton action={subscriber ? "Unsubscribe" : "Subscribe"} />
          </ActionButtonContainer>
        </BottomContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { user_firebase },
  user_page_reducer: { subscriber },
}) => ({
  user_firebase,
  subscriber,
});

const mapDispatchToProps = (dispatch) => ({
  update_subscribe_button: (bool) =>
    dispatch(validate_subscriber_success_action(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
