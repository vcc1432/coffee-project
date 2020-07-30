# Coffee Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It implements the coffee-varieties API at https://coffee-varieties.now.sh/api. 
It will fetch all the available coffee varieties, which can be filtered in the frontend of the application. The user can filter by one or more countries, quality potential and leaf rust resistance.

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

Since there was limited time to set up this application, I have some ideas for future improvements. Given an extra day for the assignment:
- I would have set up tests in Jest and Enzyme. 
- If the user would click an item in the list, this would trigger a modal-screen to pop up, styled according to [this example](https://coffee-varieties.now.sh/ui-reference.png).
  - The modal will be a resuable component, that will be shown on click on a card, and closed when the user clicks outside of the modal. 
- Show an error message when api data fetch failed.
- Now the options in the filters are harcoded. I would dynamically fetch the [schema](https://coffee-varieties.now.sh/schema/varieties.json), find the enums for the quality and resistance types, and pass them as props to the Filter component. I would map through the options and assign them the correct value and label. 
  - For countries, as they are not described in the schema, I would map through the fetched data and push all the countries in an array (remove duplicates).
  
