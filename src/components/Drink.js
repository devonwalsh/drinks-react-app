import React from 'react';
import { Card } from 'semantic-ui-react';
import '../styles/Drink.css';

const Drink = props => {

    return(
        <Card className="drink-card">
            <Card.Content 
                style={{
                    height:"200px",
                    backgroundImage: `url(${props.drinkData.strDrinkThumb})`,
                    backgroundSize: "cover"
                }}/>
            <Card.Content>
                    {props.drinkData.strDrink}
            </Card.Content>
        </Card>
    )
}

export default Drink;