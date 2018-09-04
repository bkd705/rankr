import React from 'react'

import styled from 'styled-components'
import UserIcon from './../UserIcon/UserIcon'

const UL = styled.ul`
  padding: 0;
  margin: 0;
  position: relative;
`

const LI = styled.li`
  list-style-type: none;
  position: absolute;
  top: 0;
  left: ${props => props.index * 20}px;
  display: flex;
  align-items: center;
`

class PlayersCount extends React.Component {
  render() {
    const { iconSize, members } = this.props
    return (
      <UL>
        {members.slice(0, 4).map((m, i) => {
          return (
            <LI key={i} index={i}>
              <UserIcon name={m.name} src={m.gravatar} size={iconSize} />
            </LI>
          )
        })}
      </UL>
    )
  }
}

export default PlayersCount
