import React from 'react';
import { Card, Button } from 'semantic-ui-react';

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
            <Card.Content>
            <Button floated="left">View Details</Button>
            <Button floated="right">Save</Button>
            </Card.Content>
        </Card>
    )
}

export default Drink;