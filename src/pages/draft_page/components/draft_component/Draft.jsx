import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import ProfileBox from "../../../../components/profile_box_component/ProfileBox";
import {
  Container,
  LeftContainer,
  RightContainer,
  TitleInput,
  HeaderInput,
  BodyInput,
  InsertActionsContainer,
  InsertAction,
  RemoveButton,
  InputContainer,
  BottomContainer,
  ActionButtonContainer,
  AuthorContainer,
  CategoriesContainer,
  AddIcon,
  TagInput,
  DescriptionInput,
  ImageInput,
} from "./Draft_styles";
import ActionButton from "../../../../components/action_button_component/ActionButton";
import AddIconSVG from "./media/add_button.svg";
import {
  upload_draft_start_action,
  upload_article_start_action,
  request_draft_start_action,
} from "../../../../redux/draft_page/actions";

const Draft = ({
  upload_draft,
  upload_article,
  request_draft,
  active_user_database,
  draft_id,
}) => {
  useEffect(() => {
    document.title = `Codegg - New draft`;

    request_draft({
      user_id: active_user_database.user_data.user_id,
      draft_id,
    });
  }, []);

  const [title, set_title] = useState("");
  const [blocks, set_blocks] = useState([]);
  const [tags, set_tags] = useState([]);

  const handle_title_input = (input) => {
    set_title(input);
  };

  const handle_insert_block = (type, html_type) => {
    const id = Date.now();
    set_blocks((prev_state) => [
      ...prev_state,
      {
        id,
        type,
        html_type,
        content: "",
      },
    ]);
  };

  const handle_insert_tag = () => {
    set_tags((prev_state) => [1, ...prev_state]);
  };

  const handle_remove_block = (id) => {
    set_blocks((prev_state) => prev_state.filter((block) => block.id !== id));
  };

  const handle_content_input = (input, id) => {
    set_blocks((prev_state) =>
      prev_state.map((block) => {
        if (block.id === id) block.content = input;
        return block;
      })
    );
  };

  const upload_draft_to_firebase = () => {
    const { user_id } = active_user_database.user_data;

    upload_draft({
      title,
      draft: blocks,
      user_id,
    });
  };

  const upload_article_to_firebase = () => {
    upload_article({
      title,
      article: blocks,
    });
  };

  return (
    <>
      <Container className="container">
        <LeftContainer>
          <TitleInput
            value={title}
            placeholder="Title..."
            onChange={(e) => handle_title_input(e.target.value)}
          />
          {blocks.map((block) => {
            switch (block.type) {
              case "header":
                return (
                  <InputContainer>
                    <RemoveButton onClick={() => handle_remove_block(block.id)}>
                      Remove
                    </RemoveButton>
                    <HeaderInput
                      placeholder="Header..."
                      key={block.id}
                      onChange={(e) =>
                        handle_content_input(e.target.value, block.id)
                      }
                    />
                  </InputContainer>
                );

              case "body":
                return (
                  <InputContainer>
                    <RemoveButton onClick={() => handle_remove_block(block.id)}>
                      Remove
                    </RemoveButton>
                    <BodyInput
                      rows="1"
                      placeholder="Paragraph..."
                      key={block.id}
                      onChange={(e) =>
                        handle_content_input(e.target.value, block.id)
                      }
                    />
                  </InputContainer>
                );

              default:
                return;
            }
          })}
          <InsertActionsContainer>
            <InsertAction onClick={() => handle_insert_block("header", "h1")}>
              <AddIcon src={AddIconSVG} />
              Header
            </InsertAction>
            <InsertAction onClick={() => handle_insert_block("body", "p")}>
              <AddIcon src={AddIconSVG} />
              Body
            </InsertAction>
            <InsertAction>
              {" "}
              <AddIcon src={AddIconSVG} />
              Image
            </InsertAction>
          </InsertActionsContainer>
          <BottomContainer>
            <ActionButtonContainer onClick={() => upload_draft_to_firebase()}>
              <ActionButton action={"Save Draft"} />
            </ActionButtonContainer>
            <ActionButtonContainer onClick={() => upload_article_to_firebase()}>
              <ActionButton action={"Publish"} />
            </ActionButtonContainer>
          </BottomContainer>
        </LeftContainer>
        <RightContainer>
          <AuthorContainer>
            {active_user_database ? (
              <ProfileBox
                profile_image={active_user_database.user_data.profile_image}
                user={active_user_database.user_data.user}
                date={null}
              />
            ) : null}
            <DescriptionInput
              placeholder="Write a small preview of the article..."
              rows="3"
            />
          </AuthorContainer>
          <CategoriesContainer>
            {tags.map((tag) => {
              return <TagInput placeholder="#crypto" />;
            })}
            <InsertAction onClick={() => handle_insert_tag()}>
              <AddIcon src={AddIconSVG} />
              Tag
            </InsertAction>
          </CategoriesContainer>
        </RightContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { active_user_database },
  draft_page_reducer: { draft_id, draft },
}) => ({
  active_user_database,
  draft_id,
  draft,
});

const mapDispatchToProps = (dispatch) => ({
  upload_draft: (draft) => dispatch(upload_draft_start_action(draft)),
  upload_article: (article) => dispatch(upload_article_start_action(article)),
  request_draft: (obj) => dispatch(request_draft_start_action(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Draft);
