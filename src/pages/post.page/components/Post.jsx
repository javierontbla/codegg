import React from "react";
import ReactMarkdown from "react-markdown";

import {
  Title,
  Author,
  Date,
  AuthorContainer,
  InfoContainer,
  ReadTime,
  Body,
} from "./Post.styles";

const Post = () => {
  const test = `
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
  quae ab illo inventore veritatis et quasi architecto beatae vitae 
  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
  ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea 
  voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
  quo voluptas nulla pariatur?
  `;

  return (
    <>
      <Title>Por que Amazon es una mala inversión</Title>
      <AuthorContainer>
        <Author>Website Name</Author>
      </AuthorContainer>
      <InfoContainer>
        <Date>09 de agosto de 2020</Date>
        <ReadTime>10 minutos</ReadTime>
      </InfoContainer>
      <Body className="mark">
        <ReactMarkdown source={test} />
      </Body>
    </>
  );
};

export default Post;
