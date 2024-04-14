/* eslint-disable react/jsx-no-bind */
import { ThemeProvider } from 'styled-components'

import React, { useState } from 'react'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [trocaTema, setTrocaTema] = useState(false)

  function funcTrocaTema() {
    setTrocaTema(!trocaTema)
  }

  return (
    <ThemeProvider theme={trocaTema ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={funcTrocaTema} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
