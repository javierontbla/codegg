import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../../../components/spinner_component/Spinner";
import ActionButton from "../../../components/action_button_component/ActionButton";
import Title from "../../../components/title_component/Title";
import ProfileCard from "../profile_card_component/ProfileCard";
import {
  Container,
  LeftContainer,
  RightContainer,
  EditContainer,
  NameContainer,
  DescriptionContainer,
  InputContainer,
  ActionButtonContainer,
} from "./ProfileDashboard_styles";
import { update_profile_start_action } from "../../../redux/profile_page/actions";

const ProfileDashboard = ({
  user_id,
  data,
  id,
  update_profile,
  loading_profile_update,
}) => {
  const [user, set_user] = useState(data.user);
  const [description, set_description] = useState(data.description);

  const initial_user = useRef(data.user);
  const initial_description = useRef(data.description);

  useEffect(() => {
    document.title = `Codegg - Edit @${data.username}`;
  }, []);

  const handle_input_field = (value, hook) => {
    hook(value);
  };

  const update_profile_to_firebase = () => {
    if (
      initial_user.current !== user ||
      initial_description.current !== description
    ) {
      update_profile({
        user_id,
        user,
        description,
      });

      initial_user.current = user;
      initial_description.current = description;
    }
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <ProfileCard data={data} id={id} />
        </LeftContainer>
        <RightContainer>
          <Title title="Edit" />
          <EditContainer>
            <NameContainer>
              <InputContainer
                onChange={(e) => handle_input_field(e.target.value, set_user)}
                value={user}
                name="true"
                minRows="1"
                maxRows="1"
                spellCheck="false"
              />
            </NameContainer>
            <DescriptionContainer>
              <InputContainer
                onChange={(e) =>
                  handle_input_field(e.target.value, set_description)
                }
                value={description}
                minRows="5"
                maxRows="5"
                spellCheck="false"
              />
            </DescriptionContainer>
          </EditContainer>
          <ActionButtonContainer onClick={() => update_profile_to_firebase()}>
            <ActionButton action="Save Changes" />
            {loading_profile_update ? <Spinner /> : null}
          </ActionButtonContainer>
        </RightContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  profile_page_reducer: { loading_profile_update },
}) => ({
  loading_profile_update,
});

const mapDispatchToProps = (dispatch) => ({
  update_profile: (profile) => dispatch(update_profile_start_action(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDashboard);
