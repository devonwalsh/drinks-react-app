import React from 'react';
import { Card } from 'semantic-ui-react';
import DrinkCard from '../components/DrinkCard';

const DrinkList = props => {
    return (
        <Card.Group itemsPerRow={4}>
        {props.drinks.map((drink, idx) => 
            <DrinkCard className="drink-card"
                key={idx} 
                drinkData={drink} 
                fluid
            />
        )}
        </Card.Group>
    )
}

export default DrinkList;