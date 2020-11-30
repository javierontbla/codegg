import React, { useEffect } from "react";
import moment from "moment";
import "moment/locale/es";

import Category from "../../../../components/category_component/Category";
import {
  Description,
  LastUpdate,
  Categories,
  Container,
  LinkStock,
  Preview,
  Author,
  Title,
  Img,
} from "./Card_styles";

const Card = ({ data, id, search }) => {
  useEffect(() => {
    moment.locale("es");
  }, []);
  const link_name = data.titulo_link.split(" ").join("-").toLowerCase();
  return (
    <>
      <Container>
        <LinkStock to={`/${link_name}-${id}`}>
          <Img source={data.imagen} />
          <Description>
            <LastUpdate>
              Actualizado: {moment(data.fecha.toDate()).format("LL")} ·{" "}
              {data.trimestre.toUpperCase()}
            </LastUpdate>
            <Title>{data.titulo}</Title>
            <Author>Autor: {data.autor}</Author>
            <Preview>{data.descripcion}...</Preview>
          </Description>
        </LinkStock>
        <Categories>
          {data.categorias.map((category) => {
            return (
              <Category
                onClick={() => search(category)}
                category={category}
                name={category}
                key={category}
              />
            );
          })}
        </Categories>
      </Container>
    </>
  );
};

export default Card;
