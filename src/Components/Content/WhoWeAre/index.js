/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import styled from 'styled-components'

import { members } from 'data'
import { LAction } from 'Widgets'

const MemGroup = ({ name, className }) => (
  <_MemGroup className={className}>
    {name}
  </_MemGroup>
)

const _MemGroup = styled.header.attrs(({theme: {col:c}}) => ({c}))`
  font-size: 2.5rem;
  padding: 2rem;
`

class WhoWeAre extends Component {
  render() {
    const professors = members.professors.map((mem, idx) => {
      const con = mem.contact
      return (
        <section key={`${idx}`}>
          <div className='image'>
            <img src={require(`../../../images/people/${mem.userId}.${mem.imageFormat}`)} alt={mem.userId} data-position="center center"></img>
          </div>
          <div className='content'>
            <h2>{mem.name}</h2>
            <h4>{mem.role}</h4>
            <h5>{mem.department}</h5>
            <p></p>
            <LAction>
              {con.website ? <li><a href={con.website} target='_blank' rel='noopener noreferrer' className='button small'>Website</a></li> : null}
              {con.researcherId ? <li><a href={con.researcherId} target='_blank' rel='noopener noreferrer' className='button small'>Researcher ID</a></li> : null}
              {con.email ? con.email.map((e, id) => <li key={`${id}`}><a href={`mailto:${e}`} target='_top' className='button small'>Email</a></li>) : null}
              {con.phone ? con.phone.map((e, id) => <li key={`${id}`}><a href={`tel:${e}`} target='_top' className='button small'>Phone</a></li>) : null}
            </LAction>
          </div>
        </section>
      )
    })
    const current = members.current.map((mem, idx) => {
      const con = mem.contact
      return (
        <section key={`${idx}`}>
          <div className='image'>
            <img src={require(`../../../images/people/${mem.userId}.${mem.imageFormat}`)} alt={mem.userId} data-position="center center"></img>
          </div>
          <div className='content'>
            <h2>{mem.name}</h2>
            <h4>{mem.role} {mem.year}</h4>
            <p className='about'>
              {mem.project ? <><div><b>Project</b></div><div>{mem.project}</div></> : null}
              {mem.previousEducation ? <><div><b>Previous Education</b></div><div>{mem.previousEducation}</div></> : null}
              {mem.workExperience ? <><div><b>Work Experience</b></div><div>{mem.workExperience}</div></> : null}
            </p>
            <LAction>
              {con.email ? con.email.map((e, id) => <li key={`${id}`}><a href={`mailto:${e}`} target='_top' className='button small'>Email</a></li>) : null}
            </LAction>
          </div>
        </section>
      )
    })
    const alumni = members.alumni.map((mem, idx) => {
      return (
        <section key={`${idx}`}>
          <div className='image'>
            <img src={require(`../../../images/people/${mem.userId}.${mem.imageFormat}`)} alt={mem.userId} data-position="center center"></img>
          </div>
          <div className='content'>
            <h2>{mem.name}</h2>
            <h4>{mem.role} {mem.year}</h4>
            <p className='about'>
              {mem.previousEducation ? <><div><b>Previous Education</b></div><div>{mem.previousEducation}</div></> : null}
              {mem.currentStatus ? <><div><b>Current Status</b></div><div>{mem.currentStatus}</div></> : null}
            </p>
          </div>
        </section>
      )
    })
    return (
    <_WhoWeAre className="wrapper style2 spotlights">
      <MemGroup name='Faculty'/>
      {professors}
      <MemGroup name='Current Members'/>
      {current}
      <MemGroup name='Our Alum'/>
      {alumni}
    </_WhoWeAre>)
  }
}

const _WhoWeAre = styled.section.attrs(({theme: {col:c}}) => ({c}))`
  display: grid;
  grid-row-gap: 1rem;
  font-size: 1.6rem;
  padding: 2rem;
  background-color: ${p => p.c.violet.dark(1)};
  color: ${p => p.c.white.pr()};
  &>section {
    display: grid;
    margin: 1.5rem;
    padding: 2rem;
    border: 1px solid ${p => p.c.violet.card(0)};
    grid-template-columns: min-content 1fr;
    grid-column-gap: 6rem;
    align-items: center;
    box-shadow: 2rem 2rem 4rem rgba(0,0,0,.25);
    &>.image>img {
      width: 15vw;
      height: 15vw;
      display: block;
    }
    &>.content {
      display: grid;
      grid-row-gap: 2rem;
      &>.about {
        display: grid;
        grid-template-columns: minmax(20vw, 18rem) 1fr;
        grid-row-gap: .5rem;
      }
    }
  }
`

export default WhoWeAre