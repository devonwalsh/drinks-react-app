import React from 'react';
import Drink from '../components/Drink';

const DrinkList = props => {
    return(props.drinks.map((drink, idx) => <Drink key={idx} drinkData={drink} />))
}

export default DrinkList;