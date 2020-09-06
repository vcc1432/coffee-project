# Coffee Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It implements the coffee-varieties API at https://coffee-varieties.now.sh/api. 
It will fetch all the available coffee varieties, which can be filtered in the frontend of the application. The user can filter by one or more countries, quality potential and leaf rust resistance.

The user can select one or more filters on top of the page. Multiple countries can be selected, the other filters are dropdowns from which one choice can be selected. When a flter is selected, the list of coffee varieties is automatically updated, and takes all filters into account. 

## Technical Decisions

The decision was made to divide the React-app into stateful- and stateless functional components that use hooks to manage state. The Varieties.js component serves as the homepage, which also handles the connection to the backend and the state of the application. From there, a list of coffee varieties and filters are rendered. 

As querying the API was not possible, the focus was on frontend filtering. Since the data retrieved from the API is manageable, this works for this case. However, to make a more scalable application the API would be queried and routing would be used to display a detail page. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any (lint) errors in the console.

For this project, CI/CD is enabled. Every commit and subsequent push to the remote master will trigger a build and deploy to Github Pages by means of GitHub Actions (if the repository is public, it is private at the moment).

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Future improvements, features and fixes

- Tests in Jest and Enzyme will be set up. 
- Detail pages: If the user would click an item in the list, this will trigger a modal-screen to pop up, styled according to [this example](https://coffee-varieties.now.sh/ui-reference.png). It would be a child of the Variety.js component, and would therefore have access to its props.
  - The modal will be a resuable component, that will be shown on click on a card, and closed when the user clicks outside of the modal. 
- Show an error message when API data fetch failed.
