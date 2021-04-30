import React, { Component } from 'react';
import FeaturedDrink from '../components/FeaturedDrink';
import { Container } from 'semantic-ui-react';

class Home extends Component {

    state = {
        drink: ''
    }

    getDrink = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => this.setState({drink: data.drinks[0]}))
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getDrink();
    }

    render() {
        return(
            <Container className="featured-drink">
                <h2>Featured Drink</h2>
                <FeaturedDrink drinkData={this.state.drink} />
            </Container>
        )
    }
}

export default Home;