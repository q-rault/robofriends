import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
// import {robots} from './robots'; LE NOM DE LA VARIABLE DOIT ETRE UTILISE TEL QUE DEFINI DANS LE FICHIER JSX OU RENOMME AVEC  //AS//

const logger=createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//routing: react router
//JS ramda lodash
//(styling) glamorous/styledcomponents/cssmodules
// gatsby static pages
// server side rendering Next.js
//reusable components Material-ui & semantic-ui
//efficiency: Reselect
//asynchrounous actions : redux-saga(very complex) & redux-thunk
//immutable.js to force immutable state