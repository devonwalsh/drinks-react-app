import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';

class DrinkSearch extends Component {

    state = {
        drinkResults: []
    }

    sortAndSetState = data => {
        if (data !== null) {
                let sortedDrinks = data.sort(
                    (a, b) => {
                        if (a.strDrink > b.strDrink) { return 1 }
                        else if (a.strDrink < b.strDrink) { return -1 }
                        else { return 0 }
                    }
                )
    
                this.setState({...this.state, drinkResults: sortedDrinks})
        }
        else this.setState({...this.state, drinkResults: null})
    }

    searchDrinks = query => {

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => this.sortAndSetState(data.drinks))
        .catch(error => console.log(error))

    }

    render() {
        return(
            <Container className="drink-search">
                <SearchBar searchDrinks={this.searchDrinks} />
                <h2>Search Results</h2>
                <SearchResults drinks={this.state.drinkResults} />
            </Container>
        )
    }
}

export default DrinkSearch;