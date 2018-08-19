import React from 'react'

import styled from 'styled-components'
import { spacing } from './../../css-variables'

const ListItem = styled.li `
  display: grid;
  grid-template-columns: 25% auto;
  grid-gap: ${spacing.sm};

  p {
    margin: 0 0 ${spacing.md};
  }
`

class RecentActivityItem extends React.Component {
  render() {
    const { game, winner, loser, won, points } = this.props.recentActivity
    return (
      <ListItem>
        <p><strong>{ game }</strong></p>
        {won && (
          <p>{ loser } <strong>lost to</strong> { winner } and was <strong>deranked</strong> { points } points</p>
        )}
        {!won && winner && (
          <p>{ winner } <strong>beat</strong> { loser } and was <strong>awarded</strong> { points } points</p>
        )}
      </ListItem>
    )
  }
}

export default RecentActivityItem