import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

class DrinkCard extends Component {

    saveDrinkToDB = drink => {
        fetch(`http://localhost:4000/drinks`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(drink)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    render() {
        return(
            <Card>
                <Card.Content className={this.props.className}
                    style={{
                        backgroundImage: `url(${this.props.drinkData.strDrinkThumb})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}/>
                <Card.Content>
                        {this.props.drinkData.strDrink}
                </Card.Content>
                <Card.Content>
                <Button 
                    floated="left" 
                    color="green" 
                    basic>
                    View Details
                </Button>
                <Button 
                    floated="right" 
                    color="green" 
                    onClick={() => 
                    this.saveDrinkToDB({
                        idDrink: this.props.drinkData.idDrink,
                        strDrink: this.props.drinkData.strDrink,
                        strDrinkThumb: this.props.drinkData.strDrinkThumb
                    })}>
                    Save
                </Button>
                </Card.Content>
            </Card>
        )
    }
}

export default DrinkCard;