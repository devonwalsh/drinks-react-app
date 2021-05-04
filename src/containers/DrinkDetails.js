import React, { Component } from 'react';

class DrinkDetails extends Component {

    state = {
        drinkDetails: []
    }

    fetchDetails = () => {
        const { drinkId } = this.props.match.params

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(res => res.json())
        .then(data => this.saveDetailsToState(data.drinks[0]))
        .catch(error => console.log(error))
    }

    saveDetailsToState = data => {
        this.setState({drinkDetails: data})
    }

    componentDidMount() {
        this.fetchDetails()
    }

    render() {
        return(
            <div>Details page</div>
        )
    }
}

export default DrinkDetails;