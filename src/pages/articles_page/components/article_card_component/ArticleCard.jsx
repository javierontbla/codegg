import React, { useEffect } from "react";
import moment from "moment";
import "moment/locale/es";

import Category from "../../../../components/category_component/Category";
import {
  ArticleCardContainer,
  DataContainer,
  Categories,
  LinkArticle,
  Paragraph,
  Title,
  Image,
  Date,
} from "./ArticleCard_styles";

const ArticleCard = ({ data, id, search }) => {
  useEffect(() => {
    moment.locale("en");
  }, []);
  const link_title = data.titulo_link.split(" ").join("-").toLowerCase();
  return (
    <>
      <ArticleCardContainer>
        <LinkArticle to={`/${link_title}-${id}`}>
          <Image source={data.imagen} />
          <DataContainer>
            <Date>Date: {moment(data.fecha.toDate()).format("LL")}</Date>
            <Title>{data.titulo}</Title>
            <Paragraph>{data.descripcion}...</Paragraph>
          </DataContainer>
        </LinkArticle>
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
      </ArticleCardContainer>
    </>
  );
};

export default ArticleCard;
