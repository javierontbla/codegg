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
  InsertButton,
  BottomContainer,
  ActionButtonContainer,
  AuthorContainer,
  TagsContainer,
  AddIcon,
  DeleteIcon,
  TagInputContainer,
  TagInput,
  InsertTagButton,
  DescriptionInput,
  InputOverlay,
  DeleteContainer,
  DeleteButton,
  HeaderInput,
  BodyInput,
  ImageInput,
  InsertButtonsContainer,
  ContentContainer,
} from "./Draft_styles";
import {
  upload_draft_start_action,
  upload_article_start_action,
} from "../../../../redux/drafts_page/actions";
import AddIconSVG from "./media/add_button.svg";
import DeleteIconSVG from "./media/delete_button.svg";

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

  const handle_tag_input = (input, indx) => {
    set_genres((prev_state) => {
      prev_state[indx] = input;
      return [...prev_state];
    });
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
    set_genres((prev_state) => ["", ...prev_state]);
  };

  const remove_tag = (value) => {
    set_genres((prev_state) => prev_state.filter((tag) => tag !== value));
  };

  const save_draft_to_firebase = () => {
    const { user_id, profile_image } = user_firebase.user_data;
    save_draft({
      user_id,
      draft_id,
      draft: {
        title,
        description,
        genres,
        content,
        profile_image,
      },
    });
  };

  const save_article_to_firebase = () => {
    const { user, user_id } = user_firebase.user_data;
    save_article({
      user,
      user_id,
      title,
      description,
      content,
      genres,
    });
  };

  return (
    <>
      <Container className="container">
        <TopContainer>
          <LeftContainer>
            <ContentContainer>
              <TitleInput
                value={title}
                placeholder="Untitled"
                onChange={(e) => handle_input_field(set_title, e.target.value)}
              />
              {content.map((content_block) => {
                switch (content_block.type) {
                  case "header":
                    return (
                      <InputOverlay>
                        <DeleteContainer
                          onClick={() => remove_input(content_block.id)}
                        >
                          <DeleteIcon src={DeleteIconSVG} tag={"true"} />
                          <DeleteButton>Remove</DeleteButton>
                        </DeleteContainer>
                        <HeaderInput
                          minRows="1"
                          value={content_block.text}
                          placeholder="Write a header"
                          key={content_block.id}
                          onChange={(e) =>
                            handle_content_input(
                              e.target.value,
                              content_block.id
                            )
                          }
                        />
                      </InputOverlay>
                    );

                  case "body":
                    return (
                      <InputOverlay>
                        <DeleteContainer
                          onClick={() => remove_input(content_block.id)}
                        >
                          <DeleteIcon src={DeleteIconSVG} tag={"true"} />
                          <DeleteButton>Remove</DeleteButton>
                        </DeleteContainer>
                        <BodyInput
                          minRows="1"
                          value={content_block.text}
                          placeholder="Write a paragraph"
                          key={content_block.id}
                          onChange={(e) =>
                            handle_content_input(
                              e.target.value,
                              content_block.id
                            )
                          }
                        />
                      </InputOverlay>
                    );

                  case "image":
                    return (
                      <InputOverlay>
                        <DeleteContainer
                          onClick={() => remove_input(content_block.id)}
                        >
                          <DeleteIcon src={DeleteIconSVG} tag={"true"} />
                          <DeleteButton>Remove</DeleteButton>
                        </DeleteContainer>
                        <ImageInput
                          rows="1"
                          value={content_block.text}
                          placeholder="Insert a Link (Unsplash, Pexels, etc...)"
                          key={content_block.id}
                          onChange={(e) =>
                            handle_content_input(
                              e.target.value,
                              content_block.id
                            )
                          }
                        />
                      </InputOverlay>
                    );

                  default:
                    return;
                }
              })}
              <InsertButtonsContainer>
                <InsertButton onClick={() => insert_input("header", "h1")}>
                  <AddIcon src={AddIconSVG} />
                  Header
                </InsertButton>
                <InsertButton onClick={() => insert_input("body", "p")}>
                  <AddIcon src={AddIconSVG} />
                  Body
                </InsertButton>
                <InsertButton onClick={() => insert_input("image", "img")}>
                  {" "}
                  <AddIcon src={AddIconSVG} />
                  Image
                </InsertButton>
              </InsertButtonsContainer>
            </ContentContainer>
            <BottomContainer>
              <ActionButtonContainer onClick={() => save_draft_to_firebase()}>
                <ActionButton action={"Save Draft"} />
              </ActionButtonContainer>
              <ActionButtonContainer onClick={() => save_article_to_firebase()}>
                <ActionButton action={"Publish"} />
              </ActionButtonContainer>
            </BottomContainer>
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
              {genres.map((tag, indx) => {
                return (
                  <TagInputContainer>
                    <DeleteIcon
                      src={DeleteIconSVG}
                      tag={"true"}
                      onClick={() => remove_tag(tag)}
                    />
                    <TagInput
                      value={tag}
                      key={indx}
                      placeholder="#genre"
                      onChange={(e) => handle_tag_input(e.target.value, indx)}
                      inputStyle={{
                        fontSize: "0.85rem",
                        background: "none",
                        border: "none",
                        color: "#ced4da",
                        padding: "0rem 0rem 0rem 0rem",
                        margin: "0rem 0rem 0rem 0rem",
                      }}
                    />
                  </TagInputContainer>
                );
              })}
              <InsertTagButton onClick={() => insert_tag()}>
                <AddIcon src={AddIconSVG} />
                Tag
              </InsertTagButton>
            </TagsContainer>
          </RightContainer>
        </TopContainer>
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
