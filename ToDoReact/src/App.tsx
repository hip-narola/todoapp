import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import RelayEnvironment from './relay/RelayEnvironment';
import TodoApp from './components/TodoApp';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Provider theme={defaultTheme}>
        <div className="App">
          <ToastContainer position="top-right" autoClose={3000} />
          <TodoApp />
        </div>
      </Provider>
    </RelayEnvironmentProvider>
  );
}

export default App;