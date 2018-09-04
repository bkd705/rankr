import React from 'react'

import styled from 'styled-components'
import UserIcon from './../UserIcon/UserIcon';

const UL = styled.ul `
  padding: 0;
  margin: 0;
  position: relative;
`

const LI = styled.li `
  list-style-type: none;
  position: absolute;
  top: 0;
  left: ${props => props.index * 20}px;
  display: flex;
  align-items: center;
`

class MembersCount extends React.Component {
  render() {
    const { iconSize, members } = this.props
    return (
      <UL>
        { members.map((m, i) => {
          if (i < 5) return <LI key={ i } index={ i }><UserIcon name={ m.name } src={ m.img } size={ iconSize } /></LI>
          return false
        }) }
      </UL>
    )
  }
}

export default MembersCount