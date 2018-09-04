import React from 'react'

// Components
import LeaderBoard from'./../ui/LeaderBoard/LeaderBoard'
import PageHeading from './../ui/PageHeading/PageHeading'
import H from './../ui/H/H'
import Button from './../ui/Button/Button'
import RecentActivityItem from './../ui/RecentActivityItem/RecentActivityItem'
import UnorderedList from './../ui/UnorderedList/UnorderedList'
import ListItem from './../ui/ListItem/ListItem'

import brennen from './../assets/brennen.jpg'
import amanda from './../assets/amanda.jpg'

import styled from 'styled-components'
import { spacing, size } from './../css-variables'

const Header = styled.header `
  display: flex;
  align-items: center;
  
  h2 {
    margin-right: ${spacing.md};
  }
`

const Main = styled.main `
  max-width: ${size.contentWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;

  @media only screen and (max-width: 1050px) {
    padding: 0 ${spacing.md};
    grid-template-columns: 1fr;
  }
`

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboards: [
        {
          name: 'HomeX Ping Pong',
          description: 'Ping Pong tournament leaderboard',
          members: [
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Amanda Field', img: amanda },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Amanda Field', img: amanda },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Brennen Denomme', img: brennen },
          ],
          topRank: {name: 'Brennen Denomme', img: brennen },
        },
        {
          name: 'HomeX Rocket League',
          description: 'Rocket League tournament leaderboard',
          members: [
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Amanda Field', img: amanda },
            {name: 'Brennen Denomme', img: brennen },
          ],
          topRank: {name: 'Brennen Denomme', img: brennen },
        },
        {
          name: 'HomeX Ping Pong',
          description: 'Ping Pong tournament leaderboard',
          members: [
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Amanda Field', img: amanda },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Amanda Field', img: amanda },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Brennen Denomme', img: brennen },
          ],
          topRank: {name: 'Brennen Denomme', img: brennen },
        },
        {
          name: 'HomeX Rocket League',
          description: 'Rocket League tournament leaderboard',
          members: [
            {name: 'Brennen Denomme', img: brennen },
            {name: 'Amanda Field', img: amanda },
            {name: 'Brennen Denomme', img: brennen },
          ],
          topRank: {name: 'Brennen Denomme', img: brennen },
        },
      ],
      recentActivityItems: [
        {game: 'HomeX Ping Pong', winner: 'Brennen Denomme', loser: 'Amanda Field', won: false, points: 4},
        {game: 'HomeX Ping Pong', winner: 'Amanda Field', loser: 'Brennen Denomme', won: true, points: 8},
        {game: 'HomeX Rocket League', winner: 'Brennen Denomme', loser: 'Amanda Field', won: false, points: 4},
        {game: 'HomeX Rocket League', winner: 'Amanda Field', loser: 'Brennen Denomme', won: true, points: 8},
        {game: 'HomeX Ping Pong', winner: 'Brennen Denomme', loser: 'Amanda Field', won: false, points: 4},
        {game: 'HomeX Ping Pong', winner: 'Amanda Field', loser: 'Brennen Denomme', won: true, points: 8},
        {game: 'HomeX Rocket League', winner: 'Brennen Denomme', loser: 'Amanda Field', won: false, points: 4},
        {game: 'HomeX Rocket League', winner: 'Amanda Field', loser: 'Brennen Denomme', won: true, points: 8},
      ],
    }
  }


  render() {
    return (
      <Main>
        <PageHeading heading="Dashboard" subheading="Manage all of your leaderboards and view their recent activity" />
        <section>
          <Header>
            <H level="2">Leaderboards</H>
            <Button>+ New</Button>
          </Header>
          <UnorderedList>
            <ListItem>
            { 
              this.state.leaderboards.map((l, i) => {
                return <LeaderBoard leaderboard={ l } key={ i } index={ i } />
              }) 
            }
            </ListItem>
          </UnorderedList>
        </section>
        <section>
          <header>
            <H level="2">Recent Activity</H>
          </header>    
          <UnorderedList>
              {
                this.state.recentActivityItems.map((r, i) => {
                  return <RecentActivityItem recentActivity={ r } key={ i } />
                })
              }
          </UnorderedList>
        </section>
      </Main>
    );
  }
}

export default Dashboard;
