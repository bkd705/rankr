import React from 'react'
import PlayersCount from './../PlayersCount/PlayersCount'
import Link from './../Link/Link'
import User from './../User/User'

import styled from 'styled-components'
import { fontSize, spacing, icon } from './../../css-variables'

const Table = styled.table`
  padding: 0 0 ${spacing.md};
  font-size: ${fontSize.sm};
  text-align: left;
`

const TRow = styled.tr`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-gap: ${spacing.xs};
  margin-bottom: ${spacing.xs};
  align-items: center;
`

const TData = styled.td`
  height: ${icon.sm};
  display: flex;

  span {
    align-self: center;
    margin-left: calc(
      ${props => (props.count > 5 ? 5 * 20 : props.count * 20)}px + ${icon.sm} +
        ${spacing.xs}
    );
  }
`

class LeaderBoard extends React.Component {
  render() {
    const { id, title, description, players } = this.props.leaderboard
    return (
      <Table>
        <thead>
          <TRow>
            <th>
              <Link to={`/leaderboard/${id}`}>{title}</Link>
            </th>
            <th>Players</th>
          </TRow>
        </thead>
        <tbody>
          <TRow>
            <td>{description}</td>
            <TData count={players.length}>
              <PlayersCount members={players} iconSize={icon.sm} />
              <span>{players.length}</span>
            </TData>
          </TRow>
        </tbody>
      </Table>
    )
  }
}

export default LeaderBoard
