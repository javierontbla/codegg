import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";

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
  TagsContainer,
  AddIcon,
  TagInput,
  DescriptionInput,
  InputOverlay,
  RemoveButton,
  HeaderInput,
  BodyInput,
  ImageInput,
  InsertActionsContainer,
} from "./Draft_styles";
import {
  upload_draft_start_action,
  upload_article_start_action,
} from "../../../../redux/drafts_page/actions";
import AddIconSVG from "./media/add_button.svg";

const Draft = ({ data, user_firebase, save_draft, save_article }) => {
  const {
    params: { draft_id },
  } = useRouteMatch();
  const [title, set_title] = useState(data.title);
  const [content, set_content] = useState(data.content);
  const [genres, set_genres] = useState(data.genres);
  const [description, set_description] = useState(data.description);
  useEffect(() => {
    if (data.title.length > 0) {
      document.title = `Codegg - ${data.title}`;
    } else {
      document.title = `Codegg - New draft`;
    }
  }, []);

  const handle_input_field = (field, input) => {
    field(input);
  };

  const handle_content_input = (input, id) => {
    set_content((prev_state) =>
      prev_state.map((content_block) => {
        if (content_block.id === id) content_block.text = input;
        return content_block;
      })
    );
  };

  const remove_input = (id) => {
    set_content((prev_state) =>
      prev_state.filter((content_block) => content_block.id !== id)
    );
  };

  const insert_input = (type, html_type) => {
    const id = Date.now();
    set_content((prev_state) => [
      ...prev_state,
      {
        id,
        type,
        html_type,
        content: "",
      },
    ]);
  };

  const insert_tag = () => {
    set_genres((prev_state) => [1, ...prev_state]);
  };

  const save_draft_to_firebase = () => {
    const { user_id } = user_firebase.user_data;
    save_draft({
      user_id,
      draft_id,
      draft: {
        title,
        description,
        genres,
        content,
      },
    });
  };

  const save_article_to_firebase = () => {
    save_article({
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
            {content.map((content_block) => {
              switch (content_block.type) {
                case "header":
                  return (
                    <InputOverlay>
                      <RemoveButton
                        onClick={() => remove_input(content_block.id)}
                      >
                        Remove
                      </RemoveButton>
                      <HeaderInput
                        value={content_block.text}
                        placeholder="Header..."
                        key={content_block.id}
                        onChange={(e) =>
                          handle_content_input(e.target.value, content_block.id)
                        }
                      />
                    </InputOverlay>
                  );

                case "body":
                  return (
                    <InputOverlay>
                      <RemoveButton
                        onClick={() => remove_input(content_block.id)}
                      >
                        Remove
                      </RemoveButton>
                      <BodyInput
                        rows="1"
                        value={content_block.text}
                        placeholder="Paragraph..."
                        key={content_block.id}
                        onChange={(e) =>
                          handle_content_input(e.target.value, content_block.id)
                        }
                      />
                    </InputOverlay>
                  );

                case "image":
                  return (
                    <InputOverlay>
                      <RemoveButton
                        onClick={() => remove_input(content_block.id)}
                      >
                        Remove
                      </RemoveButton>
                      <ImageInput
                        rows="1"
                        value={content_block.text}
                        placeholder="Link..."
                        key={content_block.id}
                        onChange={(e) =>
                          handle_content_input(e.target.value, content_block.id)
                        }
                      />
                    </InputOverlay>
                  );

                default:
                  return;
              }
            })}
            <InsertActionsContainer>
              <InsertAction onClick={() => insert_input("header", "h1")}>
                <AddIcon src={AddIconSVG} />
                Header
              </InsertAction>
              <InsertAction onClick={() => insert_input("body", "p")}>
                <AddIcon src={AddIconSVG} />
                Body
              </InsertAction>
              <InsertAction onClick={() => insert_input("image", "img")}>
                {" "}
                <AddIcon src={AddIconSVG} />
                Image
              </InsertAction>
            </InsertActionsContainer>
          </LeftContainer>
          <RightContainer>
            <AuthorContainer>
              {user_firebase ? (
                <ProfileBox
                  profile_image={data.profile_image}
                  user={data.user}
                  date={null}
                />
              ) : null}
              <DescriptionInput
                value={description}
                placeholder="Some description here..."
                rows="3"
                onChange={(e) =>
                  handle_input_field(set_description, e.target.value)
                }
              />
            </AuthorContainer>
            <TagsContainer>
              {genres.map((tag) => {
                return <TagInput placeholder="#genre" />;
              })}
              <InsertAction onClick={() => insert_tag()}>
                <AddIcon src={AddIconSVG} />
                Tag
              </InsertAction>
            </TagsContainer>
          </RightContainer>
        </TopContainer>
        <BottomContainer>
          <ActionButtonContainer onClick={() => save_draft_to_firebase()}>
            <ActionButton action={"Save Draft"} />
          </ActionButtonContainer>
          <ActionButtonContainer onClick={() => save_article_to_firebase()}>
            <ActionButton action={"Publish"} />
          </ActionButtonContainer>
        </BottomContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({ user_reducer: { user_firebase } }) => ({
  user_firebase,
});

const mapDispatchToProps = (dispatch) => ({
  save_draft: (draft) => dispatch(upload_draft_start_action(draft)),
  save_article: (article) => dispatch(upload_article_start_action(article)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Draft);
