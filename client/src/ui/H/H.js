import React from 'react'
import styled from 'styled-components'
import { fontSize } from './../../css-variables'

const headings = {
  1: styled.h1 `
    font-size: ${fontSize.xl};
  `,
  2: styled.h2 `
    font-size: ${fontSize.lg};
  `,
  3: styled.h3 `
    font-size: ${fontSize.md};
  `,
  4: styled.h3 `
    font-size: ${fontSize.sm};
  `
}
class H extends React.Component {
  render() {
    const { children, ...props } = this.props
    const H = headings[this.props.level]
    return (
        <H {...props}>{children}</H>
    )
  }
}

export default H