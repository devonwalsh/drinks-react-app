import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    render() {
        return(
            <div>
            <Input 
                placeholder='Search for a drink' 
                value={this.state.searchTerm}
                onChange={e => this.setState({...this.state, searchTerm: e.target.value})}
            />
            <Button 
                type="submit"
                onClick={() => this.props.searchDrinks(this.state.searchTerm)}>
            Submit
            </Button>
          </div>
        )
    }
}

export default SearchBar;