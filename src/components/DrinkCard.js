import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

class DrinkCard extends Component {

    state = {
        drinkSaved: false 
    }

    saveButtonHandler = (array, drink) => {
        let drinkFound = array.find(
            item => item.idDrink === drink.idDrink
        )
        if (drinkFound) {
            this.setState({drinkSaved: true})
        }
        else {
            this.setState({drinkSaved: false})
        }
    }

    componentDidMount() {
        this.saveButtonHandler(this.props.savedDrinks, this.props.drinkData)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.savedDrinks !== this.props.savedDrinks) {
            this.saveButtonHandler(this.props.savedDrinks, this.props.drinkData)
        }
    }

    render() {
        return(
            <Card>
                <Card.Content 
                    className={this.props.className}
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
                            this.props.deleteDrink(this.props.drinkData)
                            this.setState({drinkSaved: false})
                        }
                        else {
                            this.props.saveNewDrink({
                            idDrink: this.props.drinkData.idDrink,
                            strDrink: this.props.drinkData.strDrink,
                            strDrinkThumb: this.props.drinkData.strDrinkThumb
                            })
                            this.setState({drinkSaved: true})
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