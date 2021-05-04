import React, { Component } from 'react';
import DrinkList from './DrinkList';
import { Container} from 'semantic-ui-react';

class Home extends Component {

    state = {
        featuredDrink: ''
    }

    getRandomDrink = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => this.setState({featuredDrink: data.drinks}))
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getRandomDrink();
    }

    render() {
        return(
            <Container className="featured-drink">
                <h2>Featured Drink</h2>
                <DrinkList 
                    drinks={Array.from(this.state.featuredDrink)}
                    itemsPerRow={1}
                    className="featured"
                />

            </Container>
        )
    }
}

export default Home;