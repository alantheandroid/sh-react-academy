import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Text } from './components/Text'
import { GlobalSyle } from './style/GlobalStyle'
import { theme } from './style/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalSyle />
      <Text>"Hello World!"</Text>
    </ThemeProvider>
  )
}

export default App
