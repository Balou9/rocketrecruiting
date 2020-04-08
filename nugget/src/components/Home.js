import React from 'react';

export class Home extends React.Component {
  render () {
    return (
      <div className="animationHeader">
        <div className="col1"></div>
        <div className="col2">
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <circle className="circleFrame1"></circle>
            <circle className="circleFrame2"></circle>
            <g className="group">
              <circle className="circle1"></circle>
              <circle className="circle2"></circle>
            </g>
          </svg>
        </div>
        <div className="col3">
          <div className="rocketHeader">
            <div className="headerTitle">Nugget Digital</div>
            <div className="headerDescription">Recruiting West African Developers for European Businesses</div>
          </div>
        </div>
      </div>
    )
  }
}
