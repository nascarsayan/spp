/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import styled from 'styled-components'
import { LAction } from 'Widgets'

class WhatWeDo extends Component {
  render() {
    return (
      <_WhatWeDo>
        <section style={{
          position: 'relative'
        }}>
          <BgV className="bg-video" >
            <video className="bg-video__content" autoPlay muted loop>
              <source src={require(`../../../images/videos/video.mp4`)} type="video/mp4" />
              <source src={require(`../../../images/videos/video.webm`)} type="video/webm" />
              Your browser is not supported!
            </video>
          </BgV>
        </section>


        <section>
          <H1eading>What we do</H1eading>
          <Contentdiv1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </Contentdiv1>
          <Contentdiv2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </Contentdiv2>
        </section>
      </_WhatWeDo>
    )
  }
}

const H1eading = styled.h1`
  text-align: center !important;
    position: absolute;
    top: 20%;
    left: 60%;
    transform: translate(-50%, -50%);
    color: #777777;
`

const Contentdiv1 = styled.div`
text-align: center !important;
    position: absolute;
    top: 40%;
    left: 60%;
    transform: translate(-50%, -50%);
    color: #777777;
`
const Contentdiv2 = styled.div`
text-align: center !important;
    position: absolute;
    top: 80%;
    left: 60%;
    transform: translate(-50%, -50%);
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

const _WhatWeDo = styled.div.attrs(({ theme: { col: c } }) => ({ c }))`
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

export default WhatWeDo
