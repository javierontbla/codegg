import styled from "styled-components";

import { colors } from "../../../../colors/colors";

const { grey } = colors;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  border-bottom-left-radius: 0.15rem;
  border-bottom-right-radius: 0.15rem;
  border-right: 1px solid ${grey};
  border-left: 1px solid ${grey};
  border-bottom: 1px solid ${grey};
`;
