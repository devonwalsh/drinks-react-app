import React, { Component } from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';
import DrinkList from './DrinkList';

class DrinkDetails extends Component {

    state = {
        drinkDetails: []
    }

    fetchDetails = () => {
        const { drinkId } = this.props.match.params

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(res => res.json())
        .then(data => this.saveDetailsToState(data.drinks[0]))
        .catch(error => console.log(error))
    }

    saveDetailsToState = data => {
        this.setState({drinkDetails: data})
    }

    componentDidMount() {
        this.fetchDetails()
    }

    render() {
        const { drinkDetails } = this.state

        let ingredients = 
            Object.entries(drinkDetails)
            .filter(item => item[0].includes("strIngredient"))
            .filter(item => item[1] !== null)
            .map(item => item[1])

        let measurements = 
            Object.entries(drinkDetails)
            .filter(item => item[0].includes("strMeasure"))
            .filter(item => item[1] !== null)
            .map(item => item[1])

        let drinkArray = [];
        drinkArray.push(drinkDetails)

        return (  

            <Container className="drink-details">
                <h2>{drinkDetails.strDrink}</h2>
                <DrinkList 
                    drinks={drinkArray}
                    itemsPerRow={1}
                    className="details-card"
                />
                <Segment>
                    <p><b>Category:</b> {drinkDetails.strCategory}</p>
                    <p><b>Glass:</b> {drinkDetails.strGlass}</p>
                </Segment>
                <Segment>
                    <h3>Ingredients</h3>
                    {measurements.map((item, index) => {
                        return (<p key={index}>{item} {ingredients[index]}</p>)
                    })}
                </Segment>
                <Segment>
                    <h3>Instructions</h3>
                    <p>{drinkDetails.strInstructions}</p>
                </Segment>
            </Container>
        )
    }
}

export default DrinkDetails;