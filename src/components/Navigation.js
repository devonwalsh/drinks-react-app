import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

    state = {
        activeItem: 'homepage'
    }

    handleClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu className="Navigation">
                <Menu.Item
                    as={NavLink} exact to="/"
                    name='homepage'
                    active={activeItem === 'homepage'}
                    onClick={this.handleClick}>
                    Home
                </Menu.Item>
                <Menu.Item
                    as={NavLink} exact to="/browse"
                    name='browse'
                    active={activeItem === 'browse'}
                    onClick={this.handleClick}>
                    Browse
                </Menu.Item>
                <Menu.Item
                    as={NavLink} exact to="/search"
                    name='search'
                    active={activeItem === 'search'}
                    onClick={this.handleClick}>
                    Search
                </Menu.Item>
                <Menu.Item
                    as={NavLink} exact to="/my-drinks"
                    name='my-drinks'
                    active={activeItem === 'my-drinks'}
                    onClick={this.handleClick}>
                    My Drinks
                </Menu.Item>
            </Menu>
        )
    }
}

export default Navigation;