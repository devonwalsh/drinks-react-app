import React from 'react';
import { Segment } from 'semantic-ui-react';
import '../styles/Drink.css';

const Drink = props => {
    //let isbnData = props.bookData.isbn.filter(number => number.startsWith('978'))
    //console.log(props.bookData.isbn)

    return(
        <Segment className="drink-card">
            <h3>{props.drinkData.strDrink}</h3>
            <img src={props.drinkData.strDrinkThumb} alt={props.drinkData.strDrink} className="drink-thumbnail" />
        </Segment>
    )
}

export default Drink;