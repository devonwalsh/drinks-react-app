import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import DrinkList from './DrinkList';

class MyDrinks extends Component {

    state = {
        savedDrinks: []
    }

    fetchDrinks = () => {
        fetch(`http://localhost:4000/drinks`)
        .then(res => res.json())
        .then(data => this.setState({savedDrinks: data}))
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
    
                this.setState({...this.state, savedDrinks: sortedDrinks})
        }
        else this.setState({...this.state, savedDrinks: null})
    }

    componentDidMount() {
        this.fetchDrinks();
    }

    render() {
        return(
            <Container>
                <DrinkList drinks={this.state.savedDrinks}/>
            </Container>
        )
    }
}

export default MyDrinks;