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
} from "./Card_styles";

const Card = ({ data, id, search }) => {
  useEffect(() => {
    moment.locale("es");
  }, []);
  const link_name = data.nombre_link.split(" ").join("-").toLowerCase();
  return (
    <>
      <Container>
        <LinkStock to={`/${link_name}-${id}`}>
          <Img source={data.imagen} />
          <Description>
            <LastUpdate>
              Actualizado: {moment(data.fecha.toDate()).format("LL")} ·{" "}
              {data.trimestre}
            </LastUpdate>
            <Stock>{data.nombre}</Stock>
            <Acronym>{data.acronimo.toUpperCase()}</Acronym>
            <Preview>{data.descripcion}...</Preview>
          </Description>
        </LinkStock>
        <Categories>
          {data.categorias.map((category) => {
            return (
              <Tag
                onClick={() => search(category)}
                category={category}
                name={category}
                key={category}
                on_card={"true"}
              />
            );
          })}
        </Categories>
      </Container>
    </>
  );
};

export default Card;
