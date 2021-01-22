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
  CategoriesContainer,
  AddIcon,
  TagInput,
  DescriptionInput,
  InputContainer,
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

const Draft = ({ data, upload_draft, upload_article, user_firebase }) => {
  const [title, set_title] = useState("");
  const [content, set_content] = useState(data.content);
  const [genres, set_genres] = useState([]);
  const [description, set_description] = useState("");

  useEffect(() => {
    document.title = `Codegg - New draft`;
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

  const handle_content_input = (input, id) => {
    set_content((prev_state) =>
      prev_state.map((content_block) => {
        if (content_block.id === id) content_block.text = input;
        return content_block;
      })
    );
  };

  const handle_remove_input = (id) => {
    set_content((prev_state) =>
      prev_state.filter((content_block) => content_block.id !== id)
    );
  };

  const handle_insert_content_block = (type, html_type) => {
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
                    <InputContainer>
                      <RemoveButton
                        onClick={() => handle_remove_input(content_block.id)}
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
                    </InputContainer>
                  );

                case "body":
                  return (
                    <InputContainer>
                      <RemoveButton
                        onClick={() => handle_remove_input(content_block.id)}
                      >
                        Remove
                      </RemoveButton>
                      <BodyInput
                        rows="1"
                        placeholder="Paragraph..."
                        key={content_block.id}
                        onChange={(e) =>
                          handle_content_input(e.target.value, content_block.id)
                        }
                      />
                    </InputContainer>
                  );
                case "image":
                  return (
                    <InputContainer>
                      <RemoveButton
                        onClick={() => handle_remove_input(content_block.id)}
                      >
                        Remove
                      </RemoveButton>
                      <ImageInput
                        rows="1"
                        placeholder="Link..."
                        key={content_block.id}
                        onChange={(e) =>
                          handle_content_input(e.target.value, content_block.id)
                        }
                      />
                    </InputContainer>
                  );

                default:
                  return;
              }
            })}
            <InsertActionsContainer>
              <InsertAction
                onClick={() => handle_insert_content_block("header", "h1")}
              >
                <AddIcon src={AddIconSVG} />
                Header
              </InsertAction>
              <InsertAction
                onClick={() => handle_insert_content_block("body", "p")}
              >
                <AddIcon src={AddIconSVG} />
                Body
              </InsertAction>
              <InsertAction
                onClick={() => handle_insert_content_block("image", "img")}
              >
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
const mapStateToProps = ({ user_reducer: { user_firebase } }) => ({
  user_firebase,
});

const mapDispatchToProps = (dispatch) => ({
  upload_draft: (draft) => dispatch(upload_draft_start_action(draft)),
  upload_article: (article) => dispatch(upload_article_start_action(article)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Draft);
