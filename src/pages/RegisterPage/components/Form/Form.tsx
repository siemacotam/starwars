import { useFormikContext } from "formik";
import { FormValues } from "src/pages/RegisterPage/RegisterPage.types";
import * as S from "./Form.styled";

export const Form = () => {
  const {
    values: { login, password, email, phone, terms },
    errors,
    handleChange,
    setFieldValue,
  } = useFormikContext<FormValues>();

  const toggleTerms = () => setFieldValue("terms", !terms);

  return (
    <S.Container>
      <S.InputWrapper>
        <S.Label>Login: </S.Label>
        <S.StyledInput
          name="login"
          value={login}
          onChange={handleChange}
          onBlur={handleChange}
          error={Boolean(errors.login)}
        />
        {errors.login && <S.ErrorMessage>{errors.login}</S.ErrorMessage>}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>Hasło: </S.Label>
        <S.StyledInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          onBlur={handleChange}
          error={Boolean(errors.password)}
        />
        {errors.password && <S.ErrorMessage>{errors.password}</S.ErrorMessage>}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>Email: </S.Label>
        <S.StyledInput
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
          onBlur={handleChange}
          error={Boolean(errors.email)}
        />
        {errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>Numer telefonu: </S.Label>
        <S.StyledInput
          name="phone"
          type="number"
          value={phone}
          onChange={handleChange}
          onBlur={handleChange}
          error={Boolean(errors.phone)}
        />
        {errors.phone && <S.ErrorMessage>{errors.phone}</S.ErrorMessage>}
      </S.InputWrapper>
      <S.CheckboxWrapper onClick={toggleTerms}>
        <S.CheckboxContainer>
          <S.HiddenCheckbox checked={terms} onChange={handleChange} />
          <S.StyledCheckbox checked={terms} onChange={handleChange}>
            <S.Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </S.Icon>
          </S.StyledCheckbox>
        </S.CheckboxContainer>
        <S.Label>Akceptuje regulamin </S.Label>
        {errors.terms && <S.ErrorMessage>{errors.terms}</S.ErrorMessage>}
      </S.CheckboxWrapper>
    </S.Container>
  );
};
