import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Img,
  Text,
  Title,
  BodyPreview,
  Date,
  Time,
  Hashtags,
  Hashtag,
  Span,
  Icon,
  LinkArticle,
} from "./Thumbnail.styles";

const Thumbnail = ({ data, id, search }) => {
  return (
    <>
      <Container>
        <LinkArticle to={`/${id}`}>
          <Img source={data.imagen} />
          <Text>
            <Title>{data.titulo}</Title>
            <Date>{data.fecha}</Date>
            <BodyPreview>{data.previo}...</BodyPreview>
          </Text>
          <Time>
            <Span>
              <Icon icon={faClock} />
            </Span>
            {data.tiempo}
          </Time>
        </LinkArticle>
        <Hashtags>
          {data.tags.map((tag) => {
            return (
              <Hashtag onClick={() => search(tag)} type={tag}>
                #{tag}
              </Hashtag>
            );
          })}
        </Hashtags>
      </Container>
    </>
  );
};

export default Thumbnail;
