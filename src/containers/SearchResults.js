import React from 'react';
import DrinkList from './DrinkList';

const SearchResults = props => {
    if (props.drinks === null) {
        return <p>0 results found.</p>
    }
    else if (props.drinks.length === 0) {
        return <p>Enter a search term.</p>
    }
    else {
        return (
            <DrinkList drinks={props.drinks} />
        )
    }
}

export default SearchResults;