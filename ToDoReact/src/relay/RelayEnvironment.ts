import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

// Use .env variable for endpoint, fallback to localhost
const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL || 'https://localhost:7197/graphql/';

// Fetch function with error handling
async function fetchQuery(operation: any, variables: any) {
  try {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`Network error: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();

    if (json.errors) {
      throw new Error(`GraphQL error: ${JSON.stringify(json.errors)}`);
    }

    return json;
  } catch (error) {
    console.error('Relay fetchQuery error:', error);
    throw error;
  }
}

const network = Network.create(fetchQuery);

const environment = new Environment({
  network,
  store: new Store(new RecordSource()),
});

export default environment;