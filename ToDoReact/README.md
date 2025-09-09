# Getting Started with Create React App + Relay

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all project dependencies.

### `Set environment variables`

Create a `.env` file in the root of your project and set your GraphQL API URL:

```env
REACT_APP_GRAPHQL_URL=your-donatet-api-url
```

> Replace `your-donatet-api-url` with the actual endpoint of your GraphQL API.

### `npx relay-compiler`

Generates the necessary Relay artifacts.

### `npm run relay`

Runs the Relay script after compilation.

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production in the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
