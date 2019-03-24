/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import styled from 'styled-components'
import { LAction } from 'Widgets'

class Home extends Component {
  render() {
    return (
      <_Home>
        <h1>Structure Processing Property</h1>
        <div>
          <p>
            Welcome to our Premier Materials Science Group headed by <b>Dr. Shibayan Roy</b>. <br/>
            Our work ranges from determining structure of various materials to studying
            mechanical and physical properties, microstructural characteristics
            and crystallogrphic texture.
          </p>
          <LAction>
            <span>Learn more</span>
          </LAction>
        </div>
        <div>
          <p>
            Our primary research focus is corelating the macroslace properties of materials to <i>microstructural </i>
            characteristics and <i>crystallogrphic</i> texture formed by tehrmal and mechanical processing. We usually
            work on <b>metal alloys</b> and <b>glass ceramics</b>. Although, there is always a scope of expanding our horizon.
            Feel free to contact us.
          </p>
          <LAction>
            <span>Contact Us</span>
          </LAction>
        </div>
      </_Home>
    )
  }
}

const _Home = styled.div.attrs(({theme: {col:c}}) => ({c}))`
  min-height: 100vh;
  background-color: ${p => p.c.violet.shades(1)};
  color: ${p => p.c.grey.pr(0)};
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  font-size: 2.5rem;
  &>h1 {
    padding-bottom: 2rem;
    font-size: 6rem;
  }
  &>div {
    padding: 2rem 0;
    &>p {
      padding-bottom: 2rem;
    }
  }
`

export default Home
