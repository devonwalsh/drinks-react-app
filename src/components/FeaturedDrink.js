import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const FeaturedDrink = props => {

    return(
        <Card.Group itemsPerRow={1}>
        <Card>
            <Card.Content 
                style={{
                    height: "400px",
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

        </Card.Group>
    )
}

export default FeaturedDrink;