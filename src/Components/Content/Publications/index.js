/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import styled from 'styled-components'
import { LAction } from 'Widgets'

class Publications extends Component {
  state = {
    pubs: [{
      author: 'Shibayan',
      paper: 'P1'
    }, {
      author: 'Samar',
      paper: 'p2'
    }
    ]
  }
  render() {
    const {
      state: {
        pubs
      }
    } = this;
    return (
      <_Publications>


        <Section>
          <H1eading>Publication</H1eading>
          {pubs.map(pub => (
            <Contentdiv>
              <p>Author: {pub.author}</p>
              <p>Paper: {pub.paper}</p>
            </Contentdiv>
          ))}
        </Section>
      </_Publications>
    )
  }
}

const Section = styled.div`
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;
`

const H1eading = styled.h1`
    color: #777777;
`

const Contentdiv = styled.div`
    color: #777777;
`



const BgV = styled.div`
  top: 100 px;
  left: 100px;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: .15;
  overflow: hidden;
  color: #777777;

  &>.content {
    height: 100%;
    width: 100%;
    object-fit: cover;
    color: #777777;
  }

`

const _Publications = styled.div.attrs(({ theme: { col: c } }) => ({ c }))`
  min-height: 100vh;
  background-color: ${p => p.c.violet.shades(1)};
  color: ${p => p.c.grey.pr(0)};
  padding: 5rem;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
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

export default Publications
