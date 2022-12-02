import styled from "styled-components";
import { buttonColor } from "./FormButton.const";
import { ButtonProps } from "./FormButton.types";

export const FormButton = styled.button<ButtonProps>`
  ${({ color }) => buttonColor(color)};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: 30px;
  max-width: 236px;
  padding: 10px;
  cursor: pointer;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
