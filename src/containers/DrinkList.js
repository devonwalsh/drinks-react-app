import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import DrinkCard from '../components/DrinkCard';

class DrinkList extends Component {

    state = {
        savedDrinks: []
    }

    fetchSavedDrinks = () => {
        fetch(`http://localhost:3000/drinks`)
        .then(res => res.json())
        .then(data => this.addSavedDrinksToState(data))
        .catch(error => console.log(error))
    }

    addSavedDrinksToState = data => {
        if (data !== null) {
            this.setState({...this.state, savedDrinks: data})
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

    addNewDrinkToState = newDrink => {
        this.setState({...this.state, savedDrinks: [...this.state.savedDrinks, newDrink]})
    }
    
    deleteDrink = deleteDrink => {
        let savedDrink = this.state.savedDrinks.find(drink => 
          drink.idDrink === deleteDrink.idDrink
        )
    
        fetch(`http://localhost:3000/drinks/${savedDrink.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(this.removeDrinkFromState(deleteDrink))
        .catch(error => console.log(error))
    }

    removeDrinkFromState = drink => {
        let updatedState = this.state.savedDrinks.filter(
          item => item.idDrink !== drink.idDrink
        )
    
        this.setState({...this.state, savedDrinks: updatedState})

        if (this.props.updateMyDrinks) {
            this.props.updateMyDrinks(updatedState)
        }
    }
    
      componentDidMount() {
        this.fetchSavedDrinks()
      }

    render() {
        return (
            <Card.Group itemsPerRow={this.props.itemsPerRow}>
            {this.props.drinks.map(drink => 
                <DrinkCard 
                    className={this.props.className}
                    key={drink.idDrink} 
                    drinkData={drink}
                    savedDrinks={this.state.savedDrinks}
                    saveNewDrink={this.saveNewDrink}
                    deleteDrink={this.deleteDrink}
                    fluid
                />
            )}
            </Card.Group>
        )
    }
}

export default DrinkList;