import styled from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { grey, white, black } = colors;
const { open_sans, source_sans_pro, roboto } = fonts;

export const ArticlePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background: ${white};
  border: 1px solid ${grey};
  margin: 0.5rem 0rem 0.5rem 0rem;
  border-radius: 0.35rem;
  box-shadow: 1.5px 1.5px 1.5px -1px #ced4da;

  &:first-child {
    margin: 0rem 0rem 0.5rem 0rem !important;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  height: 7.4rem;
  width: 100%;
  border: none;
  border-top-left-radius: 0.305rem;
  border-top-right-radius: 0.305rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.article_preview_image});
  background-repeat: no-repeat;
  border-bottom: 0.5px solid ${grey};
  padding: 0rem 0rem 0rem 0rem !important;
`;

export const DataContainer = styled.div`
  width: 100%;
`;

export const InformationContainer = styled.div`
  line-height: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 0rem 0rem 0rem;
  height: 1.1rem;
  margin: 0.55rem 0.55rem 0.3rem 0.55rem;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  line-height: 100%;
  font-family: ${roboto};
  font-size: 0.75rem;
  color: ${grey};
  letter-spacing: 0.25px;
  margin: 0rem 0rem 0rem 0rem;
  width: fit-content;
`;

export const Premium = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-family: ${open_sans};
  font-weight: 600;
  padding: 0rem 0.35rem 0rem 0.35rem;
  letter-spacing: 0.5px;
  margin: 0rem 0rem 0rem 0.75rem;
  height: 100%;
  width: fit-content;
  border-radius: 0.15rem;
  line-height: 100%;
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );
  color: ${white};
`;

export const Title = styled.div`
  font-family: ${source_sans_pro};
  font-size: 1.25rem;
  color: ${black};
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 115%;
  padding: 0rem 0.55rem 0rem 0.55rem;
`;

export const CategoriesContainer = styled.div`
  margin: 1rem 0rem 0rem 0rem;
  padding: 0.25rem 0.15rem 0.25rem 0.15rem;
  border-top: 0.5px solid ${grey};
`;
