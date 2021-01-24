import styled from "styled-components";

import { colors } from "../../../../colors/colors";

const { grey_2 } = colors;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top: 0.5px solid ${grey_2};
`;
