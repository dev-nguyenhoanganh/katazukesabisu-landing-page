import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './components/layouts/Wapper/Wrapper';
import { AppRoutes } from './routes';
import { ApplicationContext } from './ApplicationContext';
import { createTheme, ThemeProvider } from '@mui/material';
import Snackbar from './components/snackbar';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

function App() {
  const [headerIsOpen, setHeaderIsOpen] = useState(false);

  const handleOpenHeader = (state: boolean, isScrollToTop = true) => {
    if (isScrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setHeaderIsOpen(state);
  };

  return (
    <React.Fragment>
      <ApplicationContext.Provider value={{ headerIsOpen, setHeaderIsOpen: handleOpenHeader }}>
        <Wrapper>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Snackbar />
              <AppRoutes />
            </BrowserRouter>
          </ThemeProvider>
        </Wrapper>
      </ApplicationContext.Provider>
    </React.Fragment>
  );
}

export default App;
