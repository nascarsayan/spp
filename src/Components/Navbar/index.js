/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import styled from 'styled-components'
import logo from 'images/logo.svg'
import { Link } from 'react-router-dom'
import whatwedo from '../Content/WhatWeDo'

class Navbar extends Component {
  render() {
    return (
      <_Navbar>
        <div className='logo'>
          <img src={logo} alt='none' />
        </div>
        <div className='links'>
          <div><Link to='/'>Home</Link></div>
          <div><Link to='/whatwedo'>What We Do</Link></div>
          <div><Link to='/who-we-are'>Who We Are</Link></div>
          <div><Link to='/members'>Members</Link></div>
          {/* <div>What We Do</div> */}
          <div><Link to='/publications'>Publications</Link></div>
          <div><Link to='/labtour'>Labtour</Link></div>
          <div><Link to='/funstaffs'>Funstaffs</Link></div>
          <div><Link to='/contacts'>Contacts</Link></div>


          <div><Link to='/gallery'>Gallery</Link></div>
          {/* <div>Get In Touch</div> */}
        </div>
        <div className='user'>
          <div>Heeramani Prasad</div>
          <div>Sayan Naskar</div>
        </div>
      </_Navbar>
    )
  }
}

const _Navbar = styled.nav.attrs(({ theme: { col: c } }) => ({ c }))`
  background-color: ${p => p.c.violet.dark()};
  color: ${p => p.c.violet.text()};
  padding: 6vh 3vw;
  font-size: 1.6rem;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: auto;

  height: 100vh;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  text-align: right;
  top: 0;
  width: 20vw;
  z-index: 10000;
  

  &>.logo {
    margin-bottom: 8vh;
    &>img {
      display: block;
      width: 5rem;
    }
  }
  &>.links {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding: 0 2rem;
    &>div {
      text-transform: uppercase;
      padding: 3rem 0 1rem 0;
      border-bottom: 3px solid #352758;
      & a {
        text-decoration: none;        
        &:hover,
        &:link,
        &:visited,
        &:visited {
          cursor: pointer;
          color: inherit;
          text-decoration: none;
        }
      }
    }
    margin-bottom: auto;
  }
  &>.user {
    &>div {
      text-align: right;
    }
  }
`
export default Navbar