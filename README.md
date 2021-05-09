This app uses [The Cocktail DB](https://www.thecocktaildb.com/) to find cocktail recipes and save them to a library.

# Setup

- Download or clone this repository
- In the drinks-react-app folder, run `npm install`
- Start the JSON server by running `json-server --watch db.json`
- Start the app by running `npm install` in the drinks-react-app folder


# Navigation

**Home**
The home page will serve up a random drink each time the page is visited/refreshed.

**Browse**
Drinks can be browsed by category using the dropdown menu.

**Search**
Drinks can be searched by name -- just type a search term into the text input and hit "Submit."

**My Drinks**
On each drink card, there's a "Save" button, which will add drinks to your library and save them to the backend db.json file. Drinks can also be removed from your library by clicking "Unsave."

**Details**
Each drink card has a button for "View Details", which will take you to a page showing the ingredients and recipe for a given drink.
