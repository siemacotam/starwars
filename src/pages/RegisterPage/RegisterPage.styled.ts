import styled from "styled-components";

export const Container = styled.div`
  padding: 70px 50px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const FormButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: 30px;
  max-width: 236px;
  padding: 10px;
  cursor: pointer;
  :disabled {
    background-color: gray;
  }
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
