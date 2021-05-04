import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './containers/Home';
import BrowsePage from './containers/BrowsePage';
import SearchPage from './containers/SearchPage';
import MyDrinks from './containers/MyDrinks';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DrinkDetails from './containers/DrinkDetails';

class App extends Component {

  render() {

    return (
      <Router>
        <Navigation className="Navigation" />
        <Container className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/browse" component={BrowsePage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/my-drinks" component={MyDrinks} />
            <Route exact path="/drink/:drinkId" component={DrinkDetails} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
