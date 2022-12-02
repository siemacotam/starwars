import { Routes, Route, Navigate } from "react-router";
import { routes } from "src/global";
import * as S from "./Main.styled";

export const Main = (): JSX.Element => (
  <S.StyledMain>
    <Routes>
      {routes.map(({ component, path }) => (
        <Route key={path} element={component} path={path} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </S.StyledMain>
);
