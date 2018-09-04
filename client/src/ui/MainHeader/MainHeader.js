import React from 'react'
import UserIcon from '../UserIcon/UserIcon'
import brennen from './../../assets/brennen.jpg'

import styled from 'styled-components'
import { size, fontSize, header, icon, spacing } from '../../css-variables'

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

  @media only screen and (max-width: 1050px) {
    padding: 0 ${spacing.md};
  }
`

class MainHeader extends React.Component {
  render() {
    return (
        <Header>
          <p><strong>rankr</strong></p>
          <UserIcon src={ brennen } size={ icon.md }/>
        </Header>
    )
  }
}

export default MainHeader