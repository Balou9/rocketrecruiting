import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
          <div className="outterCircle">
            <div className="innerCircle">
            </div>
          </div>
      <h2 className="rocketHeader">Rocket Recruiting</h2>
      <h3 className="rocketDescription">Recruiting West African Developers for European Businesses</h3>
      </header>
        <div className="appContainer">
          <div className="titleContainer">
            <div className="developerTitle"><h2>Developers</h2></div>
            <div className="businessTitle"><h2>Businesses</h2></div>
          </div>
          <div className="instructionContainer">
            <div className="developerInstruction">
                <p className="developerText">
                Take the opportunity to apply for developer jobs in European IT companies.
                You're welcome to add links like Github or other code to convince us
                why you should be part of the developer pool.
                </p>
            </div>
            <div className="businessInstruction">
              <p className="businessText">
                Fill your developer vacancies with the best west african developers.
                Contact us for a suitable selection.
                </p>
            </div>
          </div>
          <div className="linkContainer">
          <a className="developerLink" href="mailto:developer-rocketrecruiting@gmail.com">
          developer-rocketrecruiting@gmail.com
          </a>
          <a className="businessLink" href="mailto:business-rocketrecruiting@gmail.com">
          business-rocketrecruiting@gmail.com
          </a>
          </div>
        </div>
    </div>
  );
}

export default App;
