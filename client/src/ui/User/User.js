import React from 'react'
import styled from 'styled-components'
import { fontSize, spacing } from '../../css-variables'
import UserIcon from './../UserIcon/UserIcon'

const Div = styled.div `
  display: flex;
  align-items: center;
`

const P = styled.p `
  margin: 0 0 0 ${spacing.sm};
  font-size: ${fontSize.sm}
`

class User extends React.Component {
  render() {
    const { src, iconSize, name } = this.props
    return (
        <Div>
          <UserIcon src={ src } size={ iconSize } alt={ name } />
          <P>{ name }</P>
        </Div>
    )
  }
}

export default User