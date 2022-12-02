import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

interface InputProps {
  error: boolean;
}

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input<InputProps>`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: 700;
  font-size: 20px;
  padding: 15px 0;
  border: none;
  border-bottom: 2px solid black;
  border-color: ${({ error, theme }) =>
    error ? theme.colors.red : theme.colors.black};
  :focus {
    outline: none;
  }
`;

export const Label = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: 700;
  font-size: 20px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })<InputProps>`
  border: 2px solid black;
  border-color: ${({ error, theme }) =>
    error ? theme.colors.red : theme.colors.black};
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const CheckboxElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled.p`
  text-align: right;
  color: rgba(255, 0, 0, 1);
  font-family: ${({ theme }) => theme.fonts.inter};
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  /* vertical-align: middle; */
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.colors.black};
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  border: 1px solid
    ${({ theme, checked }) => (checked ? theme.colors.black : theme.colors.red)};
  width: 25px;
  height: 25px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  transition: all 150ms;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #acacac;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
