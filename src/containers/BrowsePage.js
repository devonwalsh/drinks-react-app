import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import DropdownMenu from '../components/DropdownMenu';
import DrinkList from './DrinkList';

class BrowsePage extends Component {

    state = {
        categories: [],
        selectedCategory: '',
        drinkResults: []
    }

    fetchDrinks = category => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => res.json())
        .then(data => this.saveDrinksToState(data.drinks))
        .catch(error => console.log(error))

        this.selectCategory(category)
    }

    fetchCategories = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        .then(res => res.json())
        .then(data => this.saveCategoriesToState(data.drinks))
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

    saveCategoriesToState = data => {
        let categoryArray = [];

        data.map(item => categoryArray.push(item.strCategory))

        let sortedCategories = categoryArray.sort(
            (a, b) => {
                if (a > b) { return 1 }
                else if (a < b) { return -1 }
                else { return 0 }
            }
        )

        this.setState({categories: sortedCategories})
    }

    selectCategory = category => {
        this.setState({...this.state, selectedCategory: category})
    }

    componentDidMount() {
        this.fetchCategories();
    }

    render() {
        return(
            <Container className="drink-browse">
                <DropdownMenu 
                    categories={this.state.categories} 
                    selectedCategory={this.state.selectedCategory}
                    fetchDrinks={this.fetchDrinks}
                />
                <DrinkList drinks={this.state.drinkResults}/>
            </Container>
        )
    }
}

export default BrowsePage;