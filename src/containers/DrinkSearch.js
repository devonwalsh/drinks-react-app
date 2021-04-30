import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SearchBar from '../components/SearchBar';
import DrinkList from './DrinkList';
import '../styles/DrinkSearch.css';

class DrinkSearch extends Component {

    state = {
        query: '',
        drinkResults: []
    }

    sortAndSetState = data => {
        let sortedDrinks = data.sort(
            (a, b) => {
                if (a.strDrink > b.strDrink) { return 1 }
                else if (a.strDrink < b.strDrink) { return -1 }
                else { return 0 }
            }
        )

        this.setState({...this.state, drinkResults: sortedDrinks})
    }

    searchDrinks = query => {

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => this.sortAndSetState(data.drinks))
        .catch(error => console.log(error))

    }

    componentDidMount() {
        this.searchDrinks('coffee')
    }

    render() {
        return(
            <Container className="drink-search">
                <SearchBar />
                <h2>Search Results</h2>
                <DrinkList drinks={this.state.drinkResults} />
            </Container>
        )
    }
}

export default DrinkSearch;