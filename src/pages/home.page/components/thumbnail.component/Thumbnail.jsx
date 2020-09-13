import React, { useEffect } from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "moment/locale/es";

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
  useEffect(() => {
    moment.locale("es");
  }, []);
  const linkTitle = data.titulo.split(" ").join("-").toLowerCase();
  return (
    <>
      <Container>
        <LinkArticle to={`/${linkTitle}-${id}`}>
          <Img source={data.imagen} />
          <Text>
            <Title>{data.tituloArticulo}</Title>
            <Date>{moment(data.fecha.toDate()).format("LL")}</Date>
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
              <Tag onClick={() => search(tag)} type={tag} key={tag}>
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
