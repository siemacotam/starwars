import { AppWrapper, Main } from "src/Layout";
import { ThemeProvider } from "src/Theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <AppWrapper>
        <Main />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
