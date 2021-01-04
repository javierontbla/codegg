import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { grey, white, black } = colors;
const { source_sans_pro, roboto } = fonts;

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
  transition: box-shadow 0.2s;

  &:first-child {
    margin: 0rem 0rem 0.5rem 0rem !important;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 3px -1.5px #ced4da;
  }
`;

export const LinkContainer = styled(Link)``;

export const ImageContainer = styled.div`
  height: 8.75rem;
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

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Premium = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.565rem;
  font-family: ${roboto};
  font-weight: 500;
  padding: 0.25rem 0.35rem 0.25rem 0.35rem;
  letter-spacing: 0.5px;
  margin: 0.65rem 0rem 0rem 0.65rem;
  height: fit-content;
  width: fit-content;
  border-radius: 0.15rem;
  line-height: 100%;
  background: transparent;
  color: ${black};
  border: 0.25px solid ${black};

  &:hover {
    cursor: auto;
  }
`;

export const Title = styled.div`
  font-family: ${source_sans_pro};
  font-size: 1.2rem;
  color: ${black};
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 115%;
  width: 100%;
  height: fit-content;
  padding: 0.45rem 0.65rem 0rem 0.65rem;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  padding: 0.85rem 0.65rem 0.85rem 0.65rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const ProfileImage = styled.div`
  width: 2.15rem;
  height: 2.15rem;
  border-radius: 50%;
  border: none;
  margin: 0rem 0.5rem 0rem 0rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.profile_image});
  background-repeat: no-repeat;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const ProfileName = styled.div`
  line-height: 100%;
  font-family: ${source_sans_pro};
  font-size: 0.925rem;
  color: ${black};
  margin: 0rem 0rem 0.2rem 0rem;
  text-transform: capitalize;
`;

export const Date = styled.div`
  line-height: 100%;
  font-family: ${roboto};
  font-size: 0.65rem;
  color: ${grey};
  letter-spacing: 0.25px;
  width: fit-content;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.35rem 0.4rem 0.35rem 0.4rem;
  border-top: 0.5px solid ${grey};
`;
