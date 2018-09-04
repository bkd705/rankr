import React from 'react'

import LeaderBoard from './../ui/LeaderBoard/LeaderBoard'
import PageHeading from './../ui/PageHeading/PageHeading'
import H from './../ui/H/H'
import Button from './../ui/Button/Button'
import UnorderedList from './../ui/UnorderedList/UnorderedList'
import ListItem from './../ui/ListItem/ListItem'

import Core from '../Core/Core'
import styled from 'styled-components'
import { spacing, size } from './../css-variables'

const Header = styled.header`
  display: flex;
  align-items: center;

  h2 {
    margin-right: ${spacing.md};
  }
`

const Main = styled.main`
  max-width: ${size.contentWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 0 50px;

  @media only screen and (max-width: 1050px) {
    padding: 0 ${spacing.md};
    grid-template-columns: 1fr;
  }
`

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leaderboards: []
    }
  }

  async componentDidMount() {
    const leaderboards = await Core.leaderboards.index()

    this.setState({
      leaderboards: leaderboards.data
    })
  }

  render() {
    return (
      <Main>
        <PageHeading
          heading="Dashboard"
          subheading="Manage all of your leaderboards and view their recent activity"
        />
        <section>
          <Header>
            <H level="2">Leaderboards</H>
            <Button special>+ New</Button>
          </Header>
          <UnorderedList>
            <ListItem>
              {this.state.leaderboards.map((l, i) => {
                return <LeaderBoard leaderboard={l} key={i} index={i} />
              })}
            </ListItem>
          </UnorderedList>
        </section>
      </Main>
    )
  }
}

export default Dashboard
