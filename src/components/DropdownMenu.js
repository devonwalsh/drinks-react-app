import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownMenu = props => {

    let dropdownOptions = props.categories.map(category => {

        let formattedCategory = category.split(" ").join("_")

        let dropdownData = {
            key: formattedCategory,
            text: category,
            value: formattedCategory
        }

        return dropdownData
    })

    return(
        <div className="dropdown-menu">
            <p>Choose a category:</p>
            <Dropdown
                onChange={(e, data) => props.fetchDrinks(data.value)}
                value={props.selectedCategory}
                options={dropdownOptions}
                selection
            />
        </div>
    )
}

export default DropdownMenu;