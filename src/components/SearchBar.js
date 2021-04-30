import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';

class SearchBar extends Component {
    state = {
        query: ''
    }

    render() {
        return(
            <Search className="drink-search">
            </Search>
        )
    }
}

export default SearchBar;