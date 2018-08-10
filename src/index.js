import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from './App';
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import history from "./history";
import {userLoggedIn} from './actions/auth';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
  );
sagaMiddleware.run(rootSaga);

if (localStorage.bookwormJWT) {
  const user = {token:localStorage.bookwormJWT}
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(<Router history={history}>
  <Provider store={store}>
    <Route component={App} />
  </Provider>
</Router>, document.getElementById('root'));
