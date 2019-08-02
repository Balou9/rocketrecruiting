import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <br/>
      <br/>
      <h1 className="Rocket-Header">
        Rocket Recruiting
      </h1>
      <h2 class>
      Recruiting West African IT-Talents for European Businesses
      </h2>
      </header>
      <div className="Instruction-Container">
        <div className="Developer-Instruction">
          <h2 className="Developer-Title">For Developers</h2>
            <p className="Developer-Text">
            Take the opportunity to apply for developer jobs in European IT companies.
            You're welcome to add links like Github or other code to convince us
            why you should be part of the developer pool.
            </p>
          <a className="itTalentlink" href="mailto:ittalent-rocketrecruiting@gmail.com">
          ittalent-rocketrecruiting@gmail.com
          </a>
        </div>
        <div className="Business-Instruction">
          <h2 className="Business-Title">For Businesses</h2>
            <p className="Business-Text">
            Fill your developer vacancies with the best west african developers.
            Contact us for a suitable selection.
            </p>
            <a className="businessLink" href="mailto:business-rocketrecruiting@gmail.com">
            business-rocketrecruiting@gmail.com
            </a>
        </div>
      </div>
    </div>
  );
}

export default App;
