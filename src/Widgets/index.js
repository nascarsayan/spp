/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

export const pulsate = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: none;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 4rem rgba(0,0,0,.25);
  }
`

export class LAction extends Component {
  render() {
    let { children } = this.props
    if (! Array.isArray(children)) {
      children = [children]
    }
    return (
      <_LAction>
        {children.map((c, i) => (
          <li key={`${i}`}>
            <button>{c}</button>
          </li>
        ))}
      </_LAction>
    )
  }
}

const _LAction = styled.ul.attrs(({theme: {col:c}}) => ({c}))`
  list-style: none;
  display: flex;
  &>li {
    &>button {
      border: none;
      background-color: transparent;
      color: currentcolor;
      font-weight: 700;
      padding: 1rem 2rem;
      margin: 1rem;
      border: 1px solid ${p => p.c.violet.card(-1)};
      border-radius: .5rem;
      transition: all .2s;
      cursor: pointer;
      & * {
        text-transform: uppercase;
      }
      & a {
        &:link,
        &:visited,
        &:hover,
        &:active {
          color: inherit;
          text-decoration: none;
        }
      }
      &:hover {
        outline: none;
        animation: ${pulsate} 1s infinite;
      }
      &:focus {
        outline: none;
      }
    }
  }
`
