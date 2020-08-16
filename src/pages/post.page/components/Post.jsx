import React from "react";
import ReactMarkdown from "react-markdown";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Title,
  Author,
  Date,
  AuthorContainer,
  InfoContainer,
  ReadTime,
  Body,
  Icon,
} from "./Post.styles";

const Post = ({ post }) => {
  const markdown = "# This is a header\n\nAnd this is a paragraph";

  return (
    <>
      <Container>
        <Title>{post.titulo}</Title>
        <AuthorContainer>
          <Author>{post.autor}</Author>
        </AuthorContainer>
        <InfoContainer>
          <Date>{post.fecha}</Date>
          <ReadTime>
            <span>
              <Icon icon={faClock} />
            </span>
            {post.tiempo}
          </ReadTime>
        </InfoContainer>
        <Body className="mark">
          <ReactMarkdown source={post.texto} escapeHtml={false} />
        </Body>
      </Container>
    </>
  );
};

export default Post;
