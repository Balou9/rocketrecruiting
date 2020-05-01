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
              <Route path="/home" component={Home}>
              </Route>
              <Route path="/service" component={Service}>
              </Route>
              <Route path="/developer" component={Developer}>
              </Route>
              <Route path="/company" component={Company}>
              </Route>
              <Route path="/hello" component={Hello}>
              </Route>
          </Switch>
        <Footer/>
      </Router>
    );
}

export default App;
