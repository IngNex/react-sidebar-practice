import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';

export const ThemeContext = React.createContext(null);


function App() {
  const [theme, setTheme] = useState('light')
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      Hola
    </ThemeProvider>
  )
}

export default App
