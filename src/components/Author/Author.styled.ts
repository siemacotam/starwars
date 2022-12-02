import styled from "styled-components";

export const Author = styled.p`
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
