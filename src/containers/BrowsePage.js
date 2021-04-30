import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class BrowsePage extends Component {

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

    browseDrinks = category => {
        fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => res.json())
        .then(data => this.sortAndSetState(data.drinks))
        .catch(error => console.log(error))
    }

    render() {
        return(
            <Container className="drink-browse">
                <h3>We browsin</h3>
            </Container>
        )
    }
}

export default BrowsePage;