/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import styled from 'styled-components'
import { LAction } from 'Widgets'

class Home extends Component {
  render() {
    return (
      <_Home>
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
          <H1eading>Structure Processing Property</H1eading>
          <Contentdiv1>
            <p>
              Welcome to our Premier Materials Science Group headed by <b>Dr. Shibayan Roy</b>. <br />
              Our work ranges from determining structure of various materials to studying
              mechanical and physical properties, microstructural characteristics
              and crystallogrphic texture.
          </p>
            <LAction>
              <span>Learn more</span>
            </LAction>
          </Contentdiv1>
          <Contentdiv2>
            <p>
              Our primary research focus is corelating the macroslace properties of materials to <i>microstructural </i>
              characteristics and <i>crystallogrphic</i> texture formed by tehrmal and mechanical processing. We usually
            work on <b>metal alloys</b> and <b>glass ceramics</b>. Although, there is always a scope of expanding our horizon.
                                                                                                                                      Feel free to contact us.
          </p>
            <LAction>
              <span>Contact Us</span>
            </LAction>
          </Contentdiv2>
        </section>
      </_Home>
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
  opacity: .45;
  overflow: hidden;
  color: #777777;

  &>.content {
    height: 100%;
    width: 100%;
    object-fit: cover;
    color: #777777;
  }

`

const _Home = styled.div.attrs(({ theme: { col: c } }) => ({ c }))`
  min-height: 100vh;
  background-color: ${p => p.c.violet.shades(1)} 0.5;
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
