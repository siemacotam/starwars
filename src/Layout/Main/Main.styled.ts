import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 1130px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  height: 100%;
`;
