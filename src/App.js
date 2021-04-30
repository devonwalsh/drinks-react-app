import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import DrinkSearch from './containers/DrinkSearch';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <Container className="App">
          <Navigation/>
          <DrinkSearch/>
        </Container>
      </Router>
    );
  }
}

export default App;
