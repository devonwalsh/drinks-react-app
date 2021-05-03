import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import DrinkList from './DrinkList';

class MyDrinks extends Component {

    render() {
        return(
            <Container>
                <h2>My Saved Drinks</h2>
                <DrinkList 
                    drinks={this.props.savedDrinks}
                    savedDrinks={this.props.savedDrinks}
                    saveNewDrink={this.props.saveNewDrink}
                    deleteDrink={this.props.deleteDrink}
                    itemsPerRow={4}
                    className="drink-card"
                />
            </Container>
        )
    }
}

export default MyDrinks;