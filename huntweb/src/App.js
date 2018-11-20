import React, { Component } from 'react';
import Header from './components/Header/index';
import Main from './pages/main';
import Routes from './router';


class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
