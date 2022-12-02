import * as S from "./FormButton.styled";

interface FormButtonProps {
  color: string;
  text: string;
  onClick: () => void;
  isLoading: boolean;
}

export const FormButton = ({
  color,
  text,
  onClick,
  isLoading,
}: FormButtonProps) => (
  <S.FormButton disabled={isLoading} color={color} onClick={onClick}>
    {text}
  </S.FormButton>
);
