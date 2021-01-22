import React, { useState } from "react";

import {
  HeaderInput,
  BodyInput,
  InsertActionsContainer,
  InsertAction,
  RemoveButton,
  InputContainer,
  AddIcon,
  ImageInput,
} from "./Content_styles";
import AddIconSVG from "./media/add_button.svg";

const Content = ({ data }) => {
  const [content, set_content] = useState(data);

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
        <InsertAction onClick={() => handle_insert_content_block("body", "p")}>
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
    </>
  );
};

export default Content;
