import React from 'react'
import UserIcon from '../UserIcon/UserIcon'
import brennen from './../../assets/brennen.jpg'

import styled from 'styled-components'
import { size, fontSize, header, icon } from '../../css-variables'

const Header = styled.header `
  height: ${header.height};
  max-width: ${size.contentWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${fontSize.lg};
  }
`

class MainHeader extends React.Component {
  render() {
    const { children, ...props } = this.props

    return (
        <Header>
          <p>rankr</p>
          <UserIcon src={ brennen } size={ icon.md }/>
        </Header>
    )
  }
}

export default MainHeader