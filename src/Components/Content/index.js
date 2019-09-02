/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from './Home'
import WhoWeAre from './WhoWeAre'
import Gallery from './Gallery'
import Publications from './Publications'

class Content extends Component {
  render() {
    return (
      <_Content>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/who-we-are' component={WhoWeAre}></Route>
          <Route path='/publications' component={Publications}></Route>
          {/* <Route path='/two' component={WhatWeDo}></Route>
          <Route path='/three' component={GetInTouch}></Route> */}
          <Route path='/gallery' component={Gallery}></Route>
          <Route component={Home}></Route>
        </Switch>
      </_Content>
    )
  }
}

const _Content = styled.section.attrs(({ theme: { col: c } }) => ({ c }))`
  margin-left: 20vw;
  min-height: 100vh;
`

export default Content