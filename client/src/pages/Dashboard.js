import React from 'react'

// Components
import Main from './../ui/Main/Main'
import LeaderBoard from'./../ui/LeaderBoard/LeaderBoard'
import PageHeading from './../ui/PageHeading/PageHeading'

import brennen from './../assets/brennen.jpg'
import amanda from './../assets/amanda.jpg'

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
    }
  }


  render() {
    return (
      <Main>
        <PageHeading heading="Dashboard" subheading="Manage all of your leaderboards and view their recent activity" />
        <section>
          { this.state.leaderboards.map((l, i) => {
            return <LeaderBoard leaderboard={ l } key={ i } index={ i } />
          }) }
        </section>
      </Main>
    );
  }
}

export default Dashboard;
