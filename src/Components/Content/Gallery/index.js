/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import styled from 'styled-components'

const labImages = [
  { file: 'gate.jpeg' },
  { file: 'polishing.jpeg' },
  { file: 'room1pano.jpeg' },
  { file: 'scratchsouvik.jpeg' },
  { file: 'optical.jpeg' },
  { file: 'grinding.jpeg' },
  { file: 'polishbiswa.jpeg' },
  { file: 'hardness.jpeg' },
  { file: 'group2.jpg' },
  { file: 'hardnesssouvik.jpeg' },
  { file: 'cutting.jpeg' },
  { file: 'group1.jpeg' },
  { file: 'room3pano.jpeg' },
  { file: 'souvikposter.jpg' },
  { file: 'furnace.jpeg' },
  { file: 'souvikposter2.jpg' },
  { file: 'scratch.jpeg' },
  { file: 'room2pano.jpeg' },
  { file: 'fume.jpeg' },
  { file: 'mounting.jpeg' },
]

const labImages2 = [
  { file: 'gate.jpg' },
  { file: 'polishing.jpg' },
  { file: 'room1pano.jpg' },
  { file: 'scratchsouvik.jpg' },
  { file: 'optical.jpg' },
  { file: 'grinding.jpg' },
  { file: 'polishbiswa.jpg' },
  { file: 'hardness.jpg' },
  { file: 'group2.jpg' },
  { file: 'hardnesssouvik.jpg' },
  { file: 'cutting.jpg' },
  { file: 'group1.jpg' },
  { file: 'room3pano.jpg' },
  { file: 'souvikposter.jpg' },
  { file: 'furnace.jpg' },
  { file: 'souvikposter2.jpg' },
  { file: 'scratch.jpg' },
  { file: 'room2pano.jpg' },
  { file: 'fume.jpg' },
  { file: 'mounting.jpg' },
]

const labImagesSvg = [
  { file: 'gate.svg' },
  { file: 'polishing.svg' },
  { file: 'room1pano.svg' },
  { file: 'scratchsouvik.svg' },
  { file: 'optical.svg' },
  { file: 'grinding.svg' },
  { file: 'polishbiswa.svg' },
  { file: 'hardness.svg' },
  { file: 'group2.svg' },
  { file: 'hardnesssouvik.svg' },
  { file: 'cutting.svg' },
  { file: 'group1.svg' },
  { file: 'room3pano.svg' },
  { file: 'souvikposter.svg' },
  { file: 'furnace.svg' },
  { file: 'souvikposter2.svg' },
  { file: 'scratch.svg' },
  { file: 'room2pano.svg' },
  { file: 'fume.svg' },
  { file: 'mounting.svg' },
]

const expImages = [
  { file: '01.jpg' },
  { file: '02.jpg' },
  { file: '03.png' },
  { file: '04.jpg' },
  { file: '05.png' },
  { file: '06.png' },
  { file: '07.png' },
  { file: '08.png' },
  { file: '09.png' },
  { file: '10.png' },
  { file: '11.png' },
  { file: '12.png' },
]

class Gallery extends Component {
  render() {
    const lab = 'lab'
    return (
      <_Gallery>
        <Collage flist={labImages2} rootFol={'lab'} title={'Laboratory Tour'} />
        <Collage flist={expImages} rootFol={'exp'} title={'Experiment Shots'} />
      </_Gallery>
      //   <_Gallery2>
      //   {labImages.map((el, idx) => {
      //     let name = el.file.replace(/\..+$/, '')
      //     return (
      //       <div key={`${idx}`} className={name}>
      //         <img src={require(`../../../images/lab/${el.file}`)} alt={name}></img>
      //       </div>
      //     )
      //   })}}
      // </_Gallery2>
    )
  }
}

const _Gallery = styled.div.attrs(({ theme: { col: c } }) => ({ c }))`
  display: flex;
  flex-direction: column;
  /* background-color: #8CD8FF; */
  background-color: ${p => p.c.violet.card(0)};
  padding: 1.5rem;
`

const _Collage2 = styled.div.attrs(({ theme: { col: c } }) => ({ c }))`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(4, 1fr);
  &>div {
    &>img {
      width: 100%;
      height: auto;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    grid-column-end: span 3;
    &.group1 {
      grid-area: 2/4/3/9;
    }
    &.group2 {
      grid-area: 2/9/3/14;
    }
    &.room1pano {
      grid-area: 3/4/4/9;
    }
    &.room2pano {
      grid-area: 3/9/4/14;
    }
    &.gate {
      grid-area: 2/1/4/4;
    }
    &.souvikposter {
      grid-area: 2/14/4/17;
    }
  }
`

class Collage extends Component {
  render() {
    const { flist, rootFol, title } = this.props
    return (
      <_Collage>
        <div className='header'>{title}</div>
        <div className='pics'>
          {flist.map((el, idx) => (
            <img src={require(`../../../images/${rootFol}/${el.file}`)} alt={`${idx}`}></img>
          ))}
        </div>
      </_Collage>
    )
  }
}

const _Collage = styled.div.attrs(({ theme: { col: c } }) => ({ c }))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;
  padding: 3rem;
  box-shadow: 2rem 2rem 8rem rgba(0,0,0,.25);
  .header {
    font-size: 4rem;
    color: ${p => p.c.grey.pr(0)};
    padding-bottom: 2rem;
  }
  .pics {
    line-height: 0;
    /* background-color: ${p => p.c.grey.pr(2)}; */
    column-count: 4;
    column-gap: 0px;
    @media (max-width: 1200px) {
      column-count: 3;
    }
    @media (max-width: 1000px) {
      column-count: 2;
    }
    @media (max-width: 800px) {
      column-count: 1;
    }
    @media (max-width: 400px) {
      column-count: 1;
    }
    &>img {
      width: 100% !important;
      height: auto !important;
      padding: .5vw;
      display: block;
      border: 1px solid #7F63B9;
    }
  }
`

export default Gallery
