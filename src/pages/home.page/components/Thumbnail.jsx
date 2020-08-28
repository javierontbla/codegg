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
  Tags,
  Tag,
  Span,
  Icon,
  LinkArticle,
} from "./Thumbnail.styles";

const Thumbnail = ({ data, id, search }) => {
  const linkTitle = data.titulo.split(" ").join("-").toLowerCase();
  return (
    <>
      <Container>
        <LinkArticle to={`/${linkTitle}-${id}`}>
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
        <Tags>
          {data.tags.map((tag) => {
            return (
              <Tag onClick={() => search(tag)} type={tag}>
                #{tag}
              </Tag>
            );
          })}
        </Tags>
      </Container>
    </>
  );
};

export default Thumbnail;
