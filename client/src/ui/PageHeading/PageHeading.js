import React from 'react'
import H from './../H/H'

import styled from 'styled-components'
import { fontSize, color } from '../../css-variables'

const Header = styled.header `
  text-align: center;
`

const SubHeading = styled.h2 `
  font-size: ${fontSize.md};
  color: ${color.lightGrey};
`

class PageHeading extends React.Component {
  render() {
    const { heading, subheading } = this.props
    return (
        <Header>
          <H level={ 1 }>{ heading }</H>
          <SubHeading>{ subheading }</SubHeading>
        </Header>
    )
  }
}

export default PageHeading