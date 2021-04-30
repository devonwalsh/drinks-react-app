import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';

class SearchPage extends Component {

    state = {
        drinkResults: []
    }

    searchDrinks = query => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => this.saveDrinksToState(data.drinks))
        .catch(error => console.log(error))
    }

    saveDrinksToState = data => {
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

export default SearchPage;