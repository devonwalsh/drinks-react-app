import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownMenu = props => {

    let dropdownOptions = props.categories.map(category => {
        let dropdownData = {
            key: category,
            text: category,
            value: category
        }

        return dropdownData
    })

    dropdownOptions = [
        {key: "All",
        text: "All",
        value: "All"},
        ...dropdownOptions]

    return(
        <Dropdown
            value="All"
            options={dropdownOptions}
            selection
        />
    )
}

export default DropdownMenu;