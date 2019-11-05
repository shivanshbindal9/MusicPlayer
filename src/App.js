import React,{ Component } from 'react';
// import logo from './logo.svg';
import { Route,Switch,BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import './App.css';
import appReducers from "./reducers";
import NotFound from './components/notFound';
import Player from './components/player';

export default class AppRouter extends Component {
  constructor(props) {
    super(props)
    this.store=createStore(appReducers,applyMiddleware(thunk));
  }
  render() {
    return (
      <Provider store={this.store}>
        <BrowserRouter>
          <Switch>
            <Route path="/player" component={Player} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}