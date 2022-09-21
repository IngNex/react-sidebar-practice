import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';

export const ThemeContext = React.createContext(null);


function App() {
  const [theme, setTheme] = useState('light')
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyled/>
        <Helmet>
          <title>Sidebar - DarkLight</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Clicker+Script&family=Poppins:wght@400;500&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
