import React from 'react'
import MembersCount from './../MembersCount/MembersCount'
import Link from './../Link/Link'
import User from './../User/User'

import styled from 'styled-components'
import { fontSize, spacing, icon } from './../../css-variables'

const Table = styled.table `
  padding: ${spacing.lg} 0;
  font-size: ${fontSize.sm};
  text-align: left;
`

const TRow = styled.tr `
  display: grid;
  grid-template-columns: 300px 1fr 1fr;
  grid-gap: ${spacing.md};
  margin-bottom: ${spacing.xs};
  align-items: center;
`

const TData = styled.td `
  height: ${icon.sm};
  display: flex;

  span {
    align-self: center;
    margin-left: calc(${props => (props.count > 5 ? 5 * 20 : props.count * 20)}px + ${icon.sm} + ${spacing.xs} );
  }
`

class LeaderBoard extends React.Component {
  render() {
    const { name, description, members, topRank } = this.props.leaderboard
    return (
        <Table>
          <thead>
            <TRow>
              <th><Link href="#">{ name }</Link></th> 
              <th>Members</th>
              <th>Top Rank</th>
            </TRow>
          </thead>
          <tbody>
            <TRow>
              <td>{ description }</td>
              <TData count={ members.length }><MembersCount members={ members } iconSize={ icon.sm }>{ members.length }</MembersCount><span>{ members.length }</span></TData>
              <TData><User src={ topRank.img } name={ topRank.name } iconSize={ icon.sm } /></TData>
            </TRow>
          </tbody>
        </Table>
    )
  }
}

export default LeaderBoard