import * as S from "./ErrorComponent.styled";

export const ErrorComponent = (): JSX.Element => (
  <S.Container>
    <S.Text>Error with downloading data. Please refresh the page</S.Text>
  </S.Container>
);
