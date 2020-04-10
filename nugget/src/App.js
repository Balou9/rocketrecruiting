import React from 'react';

import { Home } from './components/Home.js'
import { Service } from './components/Service.js'
import { Developer } from './components/Developer.js'
import { Company } from './components/Company.js'
import { Hello } from './components/Hello.js'

import './App.css';


function App() {
    return (
      <div className="AppContainer">
        <header className="AppHeader">
          Nugget Digital
        </header>
        <div className="Stack">
          <Home/>
          <Service/>
          <Developer/>
          <Company/>
          <Hello/>
        </div>
        <footer className="AppFooter">Nugget Digital 2020</footer>
      </div>
    );
}

export default App;
