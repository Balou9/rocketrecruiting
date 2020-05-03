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
        <div className="AppContainer">
          <Header/>
            <Switch>
                <Route path="/service" component={Service}>
                </Route>
                <Route path="/developer" component={Developer}>
                </Route>
                <Route path="/company" component={Company}>
                </Route>
                <Route path="/hello" component={Hello}>
                </Route>
                <Route exact path="/" component={Home}>
                </Route>
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
}

export default App;
