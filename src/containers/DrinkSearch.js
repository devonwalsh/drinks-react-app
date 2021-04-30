import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SearchBar from '../components/SearchBar';
import DrinkList from './DrinkList';

class DrinkSearch extends Component {

    state = {
        query: '',
        drinkResults: []
    }

    searchDrinks = query => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => this.setState({drinkResults: data.drinks}))
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.searchDrinks('coffee')
    }

    render() {
        return(
            <Container>
                <SearchBar />
                <h2>Search Results</h2>
                <DrinkList drinks={this.state.drinkResults} />
            </Container>
        )
    }
}

export default DrinkSearch;