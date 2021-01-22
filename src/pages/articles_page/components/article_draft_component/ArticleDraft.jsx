import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

import Content from "./components/content_component/Content";
import ProfileBox from "../../../../components/profile_box_component/ProfileBox";
import ActionButton from "../../../../components/action_button_component/ActionButton";
import {
  Container,
  TopContainer,
  LeftContainer,
  RightContainer,
  TitleInput,
  InsertAction,
  BottomContainer,
  ActionButtonContainer,
  AuthorContainer,
  CategoriesContainer,
  AddIcon,
  TagInput,
  DescriptionInput,
} from "./ArticleDraft_styles";
import {
  upload_draft_start_action,
  upload_article_start_action,
  request_draft_start_action,
} from "../../../../redux/articles_page/actions";
import AddIconSVG from "./media/add_button.svg";

const ArticleDraft = ({
  upload_draft,
  upload_article,
  request_draft,
  user_firebase,
  active_draft,
}) => {
  const {
    params: { draft_id },
  } = useRouteMatch();
  const [title, set_title] = useState("");
  const [genres, set_genres] = useState([]);
  const [description, set_description] = useState("");

  useEffect(() => {
    document.title = `Codegg - New draft`;
    request_draft({
      user_id: user_firebase.user_data.user_id,
      draft_id,
    });
  }, []);

  const handle_input_field = (field, input) => {
    field(input);
  };

  const handle_insert_tag = () => {
    set_genres((prev_state) => [1, ...prev_state]);
  };

  const upload_draft_to_firebase = () => {
    const { user_id } = user_firebase.user_data;
    upload_draft({
      user_id,
      draft: {
        ...active_draft,
        title,
        description,
        genres,

        user_id,
      },
    });
  };

  const upload_article_to_firebase = () => {
    upload_article({
      title,
    });
  };

  return (
    <>
      <Container className="container">
        <TopContainer>
          <LeftContainer>
            <TitleInput
              value={title}
              placeholder="Title..."
              onChange={(e) => handle_input_field(set_title, e.target.value)}
            />
            {active_draft ? <Content data={active_draft[0].content} /> : null}
          </LeftContainer>
          <RightContainer>
            <AuthorContainer>
              {user_firebase ? (
                <ProfileBox
                  profile_image={user_firebase.user_data.profile_image}
                  user={user_firebase.user_data.user}
                  date={null}
                />
              ) : null}
              <DescriptionInput
                value={description}
                placeholder="Hey! Add some description here..."
                rows="3"
                onChange={(e) =>
                  handle_input_field(set_description, e.target.value)
                }
              />
            </AuthorContainer>
            <CategoriesContainer>
              {genres.map((tag) => {
                return <TagInput placeholder="#genre" />;
              })}
              <InsertAction onClick={() => handle_insert_tag()}>
                <AddIcon src={AddIconSVG} />
                Tag
              </InsertAction>
            </CategoriesContainer>
          </RightContainer>
        </TopContainer>
        <BottomContainer>
          <ActionButtonContainer onClick={() => upload_draft_to_firebase()}>
            <ActionButton action={"Save Draft"} />
          </ActionButtonContainer>
          <ActionButtonContainer onClick={() => upload_article_to_firebase()}>
            <ActionButton action={"Publish"} />
          </ActionButtonContainer>
        </BottomContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { user_firebase },
  articles_page_reducer: { active_draft },
}) => ({
  user_firebase,
  active_draft,
});

const mapDispatchToProps = (dispatch) => ({
  upload_draft: (draft) => dispatch(upload_draft_start_action(draft)),
  upload_article: (article) => dispatch(upload_article_start_action(article)),
  request_draft: (obj) => dispatch(request_draft_start_action(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDraft);
