import React, { useState } from "react";
import { connect } from "react-redux";

import {
  Container,
  TitleInput,
  HeaderInput,
  BodyInput,
  ActionsContainer,
  InsertAction,
  CloseIcon,
  InputContainer,
  BottomContainer,
  ActionButtonContainer,
} from "./WritePage_styles";
import ActionButton from "../../components/action_button_component/ActionButton";
import CloseIconSVG from "./media/close_button.svg";
import {
  upload_draft_start_action,
  upload_article_start_action,
} from "../../redux/write_page/actions";

const WritePage = ({ upload_draft, upload_article, active_user_database }) => {
  const [title, set_title] = useState("");
  const [blocks, set_blocks] = useState([]);

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
        <TitleInput
          value={title}
          onChange={(e) => handle_title_input(e.target.value)}
        />
        {blocks.map((block) => {
          switch (block.type) {
            case "header":
              return (
                <InputContainer>
                  <CloseIcon
                    src={CloseIconSVG}
                    onClick={() => handle_remove_block(block.id)}
                  />
                  <HeaderInput
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
                  <CloseIcon
                    src={CloseIconSVG}
                    onClick={() => handle_remove_block(block.id)}
                  />
                  <BodyInput
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
        <ActionsContainer>
          <InsertAction onClick={() => handle_insert_block("header", "h1")}>
            header
          </InsertAction>
          <InsertAction onClick={() => handle_insert_block("body", "p")}>
            body
          </InsertAction>
          <InsertAction>image</InsertAction>
        </ActionsContainer>
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
const mapStateToProps = ({ user_reducer: { active_user_database } }) => ({
  active_user_database,
});

const mapDispatchToProps = (dispatch) => ({
  upload_draft: (draft) => dispatch(upload_draft_start_action(draft)),
  upload_article: (article) => dispatch(upload_article_start_action(article)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WritePage);
