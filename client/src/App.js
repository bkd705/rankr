import React, { Component } from 'react';
import MainHeader from './ui/MainHeader/MainHeader'
import Dashboard from './pages/Dashboard'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainHeader />
        <Dashboard />    
      </React.Fragment>
    );
  }
}

export default App
