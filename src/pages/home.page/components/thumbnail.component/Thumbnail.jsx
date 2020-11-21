import React, { useEffect } from "react";
import moment from "moment";
import "moment/locale/es";

import Tag from "../../../../components/tag.component/Tag";
import {
  Description,
  LastUpdate,
  Categories,
  Container,
  LinkStock,
  Preview,
  Acronym,
  Stock,
  Img,
} from "./Thumbnail.styles";

const Thumbnail = ({ data, id, search }) => {
  useEffect(() => {
    moment.locale("es");
  }, []);
  const linkTitle = data.titulo.split(" ").join("-").toLowerCase();
  return (
    <>
      <Container>
        <LinkStock to={`/${linkTitle}-${id}`}>
          <Img source={data.imagen} />
          <Description>
            <LastUpdate>
              Actualizado: {moment(data.fecha.toDate()).format("LL")}
            </LastUpdate>
            <Stock>{data.tituloArticulo}</Stock>
            <Acronym>{data.acronimo.toUpperCase()}</Acronym>
            <Preview>{data.previo}...</Preview>
          </Description>
        </LinkStock>
        <Categories>
          {data.tags.map((tag) => {
            return (
              <Tag
                onClick={() => search(tag)}
                category={tag}
                name={tag}
                key={tag}
                on_card={"true"}
              />
            );
          })}
        </Categories>
      </Container>
    </>
  );
};

export default Thumbnail;
