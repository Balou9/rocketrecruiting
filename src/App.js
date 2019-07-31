import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h2>
        Rocket Recruiting
      </h2>
      <h4>
      Recruiting West African IT-Talents and European Businesses
      </h4>
      </header>
      <div className="For-Developers">
        <h4>For Developers</h4>
          <p>
          Take the opportunity to apply for developer jobs in European IT companies.
          You're welcome to add links like Github or other code to convince us
          why you should be part of the developer pool.
        </p>
      </div>
      <div className="For-Businesses">
        <h4>For Businesses</h4>
          <p>
          Fill your developer vacancies with the best west african developers.
          Contact us for a suitable selection.
        </p>
      </div>
    </div>
  );
}

export default App;
