import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import DrinkCard from '../components/DrinkCard';

class DrinkList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props === nextProps) {
          return false;
        } else {
          return true;
        }
    }

    render() {
        return (
            <Card.Group itemsPerRow={this.props.itemsPerRow}>
            {this.props.drinks.map((drink, idx) => 
                <DrinkCard 
                    className={this.props.className}
                    key={idx} 
                    drinkData={drink}
                    savedDrinks={this.props.savedDrinks}
                    saveNewDrink={this.props.saveNewDrink}
                    deleteDrink={this.props.deleteDrink}
                    fluid
                />
            )}
            </Card.Group>
        )
    }
}

export default DrinkList;