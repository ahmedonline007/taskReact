import React from 'react';
import RouteFile from './route';
import { Provider } from 'react-redux';
import createStore from './redux/store';

const store = createStore.create();

function App() {
  return (
    <Provider store={store}>
      <div>
        {RouteFile}
      </div>
    </Provider>
  );
}

export default App;
