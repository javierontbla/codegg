import React, { useEffect } from "react";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
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
  InfoContainer,
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
            <InfoContainer>
              <Date>{moment(data.fecha.toDate()).format("LL")} · </Date>
              <Time>
                <Span>
                  <Icon icon={faReadme} />
                </Span>
                {data.tiempo}
              </Time>
            </InfoContainer>
            <BodyPreview>{data.previo}...</BodyPreview>
          </Text>
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
