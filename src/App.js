import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './containers/Home';
import BrowsePage from './containers/BrowsePage';
import SearchPage from './containers/SearchPage';
import MyDrinks from './containers/MyDrinks';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  state = {
    savedDrinks: []
  }

  fetchSavedDrinks = () => {
      fetch(`http://localhost:3000/drinks`)
      .then(res => res.json())
      .then(data => this.sortSavedDrinks(data))
      .catch(error => console.log(error))
  }

  addNewDrinkToState = drink => {
    this.setState({...this.state, savedDrinks: [...this.state.savedDrinks, drink]})
    this.sortSavedDrinks(this.state.savedDrinks)
  }

  sortSavedDrinks = data => {
      if (data !== null) {
              let sortedDrinks = data.sort(
                  (a, b) => {
                      if (a.strDrink > b.strDrink) { return 1 }
                      else if (a.strDrink < b.strDrink) { return -1 }
                      else { return 0 }
                  }
              )

              this.setState({...this.state, savedDrinks: sortedDrinks})
      }
      else this.setState({...this.state, savedDrinks: null})
  }

  saveNewDrink = drink => {
    fetch(`http://localhost:3000/drinks`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(drink)
    })
    .then(res => res.json())
    .then(data => this.addNewDrinkToState(data))
    .catch(error => console.log(error))
  }

  deleteDrink = drink => {
    fetch(`http://localhost:3000/drinks/${drink.id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.fetchSavedDrinks()
  }

  render() {

    return (
      <Router>
        <Navigation className="Navigation" />
        <Container className="App">
          <Switch>
            <Route 
              exact path="/" 
              component={() => 
                <Home 
                  savedDrinks={this.state.savedDrinks}
                  saveNewDrink={this.saveNewDrink}
                  deleteDrink={this.deleteDrink}
                />
              }/>
            <Route 
              exact path="/browse" 
              component={() =>
                <BrowsePage 
                  savedDrinks={this.state.savedDrinks}
                  saveNewDrink={this.saveNewDrink}
                  deleteDrink={this.deleteDrink}
                />
              }/>
            <Route 
              exact path="/search" 
              component={() =>
                <SearchPage 
                  savedDrinks={this.state.savedDrinks}
                  saveNewDrink={this.saveNewDrink}
                  deleteDrink={this.deleteDrink}
                />
              }/>
            <Route 
              exact path="/my-drinks" 
              component={() =>
                <MyDrinks 
                  savedDrinks={this.state.savedDrinks}
                  saveNewDrink={this.saveNewDrink}
                  deleteDrink={this.deleteDrink}
                />
              }/>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
