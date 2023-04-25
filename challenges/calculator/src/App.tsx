import { ThemeProvider } from 'styled-components';
import { CalculationContextProvider } from './context/CalculationContext';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CalculationContextProvider>
        <Home />
        <GlobalStyle />
      </CalculationContextProvider>
    </ThemeProvider>
  );
}

export default App;
