import React from 'react';
import './App.css';

import { Header, Footer } from './components/Frame.js'
import { Home } from './components/Home.js'
import { Service } from './components/Service.js'
import { Developer } from './components/Developer.js'
import { Company } from './components/Company.js'
import { Hello } from './components/Hello.js'
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
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/service">
              <Service/>
            </Route>
            <Route path="/developer">
              <Developer/>
            </Route>
            <Route path="/company">
              <Company/>
            </Route>
            <Route path="/hello">
              <Hello/>
            </Route>
          </Switch>
        <Footer/>
      </Router>
    );
}

export default App;
