import React from "react";
import parse from "html-react-parser";
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
import { Tags, Tag } from "../../home.page/components/Thumbnail.styles";

const Post = ({ post }) => {
  return (
    <>
      <Container>
        <Title>{post.titulo}</Title>
        <AuthorContainer>
          <Author>{post.autor}</Author>
        </AuthorContainer>
        <Tags post={"true"}>
          {post.tags.map((tag) => {
            return (
              <Tag type={tag} post={"true"}>
                #{tag}
              </Tag>
            );
          })}
        </Tags>
        <InfoContainer>
          <Date>{post.fecha}</Date>
          <ReadTime>
            <span>
              <Icon icon={faClock} />
            </span>
            {post.tiempo}
          </ReadTime>
        </InfoContainer>
        <Body>{parse(post.texto)}</Body>
      </Container>
    </>
  );
};

export default Post;
