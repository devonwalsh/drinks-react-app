import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import DrinkList from './DrinkList';

class MyDrinks extends Component {

    state = {
        savedDrinks: []
    }

    addDrinksToState = data => {
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

    fetchSavedDrinks = () => {
        fetch(`http://localhost:3000/drinks`)
        .then(res => res.json())
        .then(data => this.addDrinksToState(data))
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.fetchSavedDrinks()
    }

    updateMyDrinks = updatedDrinks => {
        this.setState({...this.state, savedDrinks: updatedDrinks})
    }

    render() {
        return(
            <Container>
                <h2>My Saved Drinks</h2>
                <DrinkList 
                    drinks={this.state.savedDrinks}
                    updateMyDrinks={this.updateMyDrinks}
                    itemsPerRow={4}
                    className="drink-card"
                />
            </Container>
        )
    }
}

export default MyDrinks;