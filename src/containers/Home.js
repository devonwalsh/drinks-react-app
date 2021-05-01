import React, { Component } from 'react';
import DrinkCard from '../components/DrinkCard';
import { Container, Card } from 'semantic-ui-react';

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
                <Card.Group className="featured-drink" itemsPerRow={1}>
                    <DrinkCard className="featured" drinkData={this.state.drink} />
                </Card.Group>
            </Container>
        )
    }
}

export default Home;