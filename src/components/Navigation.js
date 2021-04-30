import React from 'react';
import { Menu } from 'semantic-ui-react';

const Navigation = () => {
        return(
            <Menu>
                <Menu.Item name='homepage' onClick={() => console.log("hello")}>Home</Menu.Item>
                <Menu.Item name='drink-search' onClick={() => console.log("hello")}>Search Drinks</Menu.Item>
                <Menu.Item name='my-drinks' onClick={() => console.log("hello")}>My Drinks</Menu.Item>
            </Menu>
        )
    }

export default Navigation;