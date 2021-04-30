import React from 'react';
import { Card } from 'semantic-ui-react';
import Drink from '../components/Drink';

const DrinkList = props => {
    return (
        <Card.Group itemsPerRow={4}>
        {props.drinks.map((drink, idx) => 
            <Drink 
                key={idx} 
                drinkData={drink} 
                fluid
            />
        )}
        </Card.Group>
    )
}

export default DrinkList;