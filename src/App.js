import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Theme from 'Theme'

import Navbar from 'Components/Navbar'
import Content from 'Components/Content'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      theme: 'GreenViolet'
    }
  }
  getTheme() {
    return Theme[this.state.theme]
  }
  render() {
    return (
      <ThemeProvider theme={this.getTheme()}>
        <Container>
          <Navbar/>
          <Content/>
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  /* display: flex; */
`

export default App
