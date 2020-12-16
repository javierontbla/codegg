import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey, white, black } = colors;
const { source_sans_pro, open_sans } = fonts;

export const ArticlePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background: ${white};
  border: 1px solid ${grey};
  margin: 0.5rem 0rem 0.5rem 0rem;
  border-radius: 0.25rem;
  box-shadow: 1.5px 1.5px 1.5px -1px #ced4da;

  &:first-child {
    margin: 0rem 0rem 0.5rem 0rem !important;
  }
`;

export const ImageContainer = styled.div`
  height: 7rem;
  width: 100%;
  border: none;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1593702953195-0f4fec55b5e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80);
  background-repeat: no-repeat;
  border-bottom: 0.5px solid ${grey};
  padding: 0rem 0rem 0rem 0rem !important;
`;

export const DataContainer = styled.div`
  width: 100%;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  line-height: 100%;
  color: ${grey};
  font-size: 0.6rem;
  font-family: ${open_sans};
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0.55rem 0.5rem 0.35rem 0.5rem;
  margin: 0rem 0rem 0rem 0rem;
  height: fit-content;
  width: 100%;
`;

export const Title = styled.div`
  font-family: ${source_sans_pro};
  font-size: 1.3rem;
  color: ${black};
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 115%;
  padding: 0rem 0.5rem 0rem 0.5rem;
`;

export const CategoriesContainer = styled.div`
  margin: 1rem 0rem 0rem 0rem;
  padding: 0.25rem 0.1rem 0.25rem 0.1rem;
  border-top: 0.5px solid ${grey};
`;
