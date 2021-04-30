import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import DrinkSearch from './containers/DrinkSearch';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <Navigation className="Navigation" />
        <Container className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/drink-search" component={DrinkSearch} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
