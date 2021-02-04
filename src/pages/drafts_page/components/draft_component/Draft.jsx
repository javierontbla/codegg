import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useRouteMatch } from "react-router-dom";

import ProfileBox from "../../../../components/profile_box_component/ProfileBox";
import ActionButton from "../../../../components/action_button_component/ActionButton";
import Spinner from "../../../../components/spinner_component/Spinner";
import {
  Container,
  TopContainer,
  LeftContainer,
  RightContainer,
  ArticleImageContainer,
  ArticleImageInput,
  TopContentContainer,
  TitleInput,
  ScoreInput,
  ImageIcon,
  InsertButton,
  BottomContainer,
  ActionButtonContainer,
  AuthorContainer,
  TagsContainer,
  AddIcon,
  DeleteIcon,
  TagInputContainer,
  Warning,
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
  delete_draft_start_action,
} from "../../../../redux/drafts_page/actions";
import AddIconSVG from "./media/add_button.svg";
import DeleteIconSVG from "./media/delete_button.svg";
import ImageIconSVG from "./media/image_button.svg";

const Draft = ({
  data,
  user_firebase,
  save_draft,
  upload_article,
  delete_draft,
  loading_uploading_draft,
  loading_uploading_article,
  new_article_id,
  categories,
}) => {
  const {
    params: { draft_id },
  } = useRouteMatch();
  const [draft_image, set_draft_image] = useState(data.draft_image);
  const [title, set_title] = useState(data.title);
  const [content, set_content] = useState(data.content);
  const [tags, set_tags] = useState(data.tags);
  const [description, set_description] = useState(data.description);
  const [score, set_score] = useState(data.score);
  const [warning, set_warning] = useState(false);

  useEffect(() => {
    if (data.title.length > 0) {
      document.title = `Codegg - ${data.title}`;
    } else {
      document.title = `Codegg - New draft`;
    }

    set_warning(false);
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
    set_tags((prev_state) => {
      prev_state[indx] = input;
      return [...prev_state];
    });
  };

  const handle_score_input = (score) => {
    if (score > 5.0) set_score(5.0);
    else if (score < 0) set_score(0.1);
    else set_score(score);
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
    set_tags((prev_state) => ["", ...prev_state]);
  };

  const remove_tag = (value) => {
    set_tags((prev_state) => prev_state.filter((tag) => tag !== value));
  };

  const save_draft_to_firebase = () => {
    const { user_id } = user_firebase.user_data;

    save_draft({
      user_id,
      draft_id,
      title,
      description,
      tags,
      content,
      draft_image,
      score,
    });

    set_warning(false);
  };

  const upload_article_to_firebase = () => {
    const { user, user_id, profile_image } = user_firebase.user_data;

    if (
      !description ||
      !title ||
      !score ||
      !draft_image ||
      content.length === 0 ||
      tags.length === 0
    ) {
      set_warning(true);
      return;
    } else {
      set_warning(false);
    }

    upload_article({
      user,
      user_id,
      profile_image,
      title,
      description,
      content,
      tags,
      draft_image,
      score,
      categories,
    });

    delete_draft({
      user_id,
      draft_id,
    });
  };

  return (
    <>
      {new_article_id ? (
        <Redirect
          to={`/reviews/${title
            .toLowerCase()
            .replace(/[^A-Za-z0-9\s]/g, "")
            .trim()
            .replace(/ /g, "-")}-${new_article_id}`}
        />
      ) : null}
      <Container>
        <TopContainer>
          <LeftContainer>
            <ArticleImageContainer draft_image={draft_image}>
              <ImageIcon src={ImageIconSVG} />
              <ArticleImageInput
                value={draft_image}
                placeholder="www.image-link.com (Unsplash, Pexels, etc.)"
                spellCheck="false"
                onChange={(e) =>
                  handle_input_field(set_draft_image, e.target.value)
                }
              />
            </ArticleImageContainer>
            <ContentContainer>
              <TopContentContainer>
                <TitleInput
                  value={title}
                  placeholder="Untitled"
                  spellCheck="false"
                  onChange={(e) =>
                    handle_input_field(set_title, e.target.value)
                  }
                />
                <ScoreInput
                  placeholder="5.0"
                  value={score}
                  type="number"
                  onChange={(e) => handle_score_input(e.target.value)}
                />
              </TopContentContainer>
              {content.map((content_block) => {
                switch (content_block.type) {
                  case "header":
                    return (
                      <InputOverlay key={content_block.id}>
                        <DeleteContainer
                          onClick={() => remove_input(content_block.id)}
                        >
                          <DeleteIcon src={DeleteIconSVG} tag={"true"} />
                          <DeleteButton>Remove</DeleteButton>
                        </DeleteContainer>
                        <HeaderInput
                          minRows="1"
                          value={content_block.text}
                          placeholder="Header"
                          spellCheck="false"
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
                      <InputOverlay key={content_block.id}>
                        <DeleteContainer
                          onClick={() => remove_input(content_block.id)}
                        >
                          <DeleteIcon src={DeleteIconSVG} tag={"true"} />
                          <DeleteButton>Remove</DeleteButton>
                        </DeleteContainer>
                        <BodyInput
                          minRows="1"
                          value={content_block.text}
                          placeholder="Paragraph"
                          spellCheck="false"
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
                      <InputOverlay key={content_block.id}>
                        <DeleteContainer
                          onClick={() => remove_input(content_block.id)}
                        >
                          <DeleteIcon src={DeleteIconSVG} tag={"true"} />
                          <DeleteButton>Remove</DeleteButton>
                        </DeleteContainer>
                        <ImageInput
                          rows="1"
                          value={content_block.text}
                          placeholder="www.image-link.com (Unsplash, Pexels, etc.)"
                          spellCheck="false"
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
              <ActionButtonContainer
                onClick={() => upload_article_to_firebase()}
              >
                <ActionButton action={"Publish"} />
              </ActionButtonContainer>
              {loading_uploading_draft || loading_uploading_article ? (
                <Spinner />
              ) : null}
            </BottomContainer>
          </LeftContainer>
          <RightContainer>
            <AuthorContainer>
              {user_firebase ? (
                <ProfileBox
                  profile_image={user_firebase.user_data.profile_image}
                  user={user_firebase.user_data.user}
                  date={null}
                  user_id={user_firebase.user_data.user_id}
                />
              ) : null}
              <DescriptionInput
                value={description}
                placeholder="Add your description here"
                minRows="1"
                maxLength="250"
                spellCheck="false"
                onChange={(e) =>
                  handle_input_field(set_description, e.target.value)
                }
              />
            </AuthorContainer>
            <TagsContainer>
              {tags.map((tag, indx) => {
                return (
                  <TagInputContainer key={indx}>
                    <DeleteIcon
                      src={DeleteIconSVG}
                      tag={"true"}
                      onClick={() => remove_tag(tag)}
                    />
                    <TagInput
                      value={tag}
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
            {warning ? (
              <Warning>Please fill all inputs before uploading</Warning>
            ) : null}
          </RightContainer>
        </TopContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { user_firebase },
  drafts_page_reducer: {
    loading_uploading_draft,
    loading_uploading_article,
    new_article_id,
  },
  articles_page_reducer: { categories },
}) => ({
  user_firebase,
  loading_uploading_draft,
  loading_uploading_article,
  new_article_id,
  categories,
});

const mapDispatchToProps = (dispatch) => ({
  save_draft: (draft) => dispatch(upload_draft_start_action(draft)),
  upload_article: (article) => dispatch(upload_article_start_action(article)),
  delete_draft: (draft) => dispatch(delete_draft_start_action(draft)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Draft);
