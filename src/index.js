import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import filteredGamesReducer from './reducers/filteredGamesReducer';
import App from './App/App';


// Store 
const store = createStore(filteredGamesReducer);

//Provider zorgt ervoor dat store gelezen kan 
//worden en opgestuurd door componenten

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);


