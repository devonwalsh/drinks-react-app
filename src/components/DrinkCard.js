import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const DrinkCard = props => {

    return(
        <Card className="drink-card">
            <Card.Content 
                style={{
                    height:"200px",
                    backgroundImage: `url(${props.drinkData.strDrinkThumb})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}/>
            <Card.Content>
                    {props.drinkData.strDrink}
            </Card.Content>
            <Card.Content>
            <Button floated="left" color="green" basic>View Details</Button>
            <Button floated="right" color="green">Save</Button>
            </Card.Content>
        </Card>
    )
}

export default DrinkCard;