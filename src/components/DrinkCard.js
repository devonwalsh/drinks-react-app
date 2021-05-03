import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

class DrinkCard extends Component {

    state = {
        drinkSaved: false 
    }

    saveDrink = drink => {
        fetch(`http://localhost:3000/drinks`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(drink)
        })
        .then(res => res.json())
        .catch(error => console.log(error))
    }

    deleteDrink = drink => {
        fetch(`http://localhost:3000/drinks/${drink.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .catch(error => console.log(error))
    }

    saveButtonHandler = (array, drink) => {
        let drinkFound = array.find(item => item.idDrink === drink.idDrink)
        if (drinkFound) {this.setState({drinkSaved: true})}
    }

    savedStateChecker = drink => {
        fetch(`http://localhost:3000/drinks`)
        .then(res => res.json())
        .then(data => this.saveButtonHandler(data, drink))
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.savedStateChecker(this.props.drinkData)
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
                    color={this.state.drinkSaved ? "red" : "green"}
                    onClick={() => {
                        if (this.state.drinkSaved) {
                            this.deleteDrink(this.props.drinkData)
                        }
                        else {
                            this.saveDrink({
                            idDrink: this.props.drinkData.idDrink,
                            strDrink: this.props.drinkData.strDrink,
                            strDrinkThumb: this.props.drinkData.strDrinkThumb
                            })
                        }
                    }}>
                    {this.state.drinkSaved ? "Unsave" : "Save"}
                </Button>
                </Card.Content>
            </Card>
        )
    }
}

export default DrinkCard;