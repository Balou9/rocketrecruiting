import React from 'react';
import './App.css';

import { Header, Footer } from './components/Frame.js'
import {
  Home,
  Service,
  Developer,
  Company,
  Hello
} from './components/Screens.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    return (
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/home" component={Home}>
            </Route>
            <Route exact path="/service" component={Service}>
            </Route>
            <Route exact path="/developer" component={Developer}>
            </Route>
            <Route exact path="/company" component={Company}>
            </Route>
            <Route exact path="/hello" component={Hello}>
            </Route>
          </Switch>
        <Footer/>
      </Router>
    );
}

export default App;
