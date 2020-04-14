import React from 'react';
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render () {
    return (
      <div className="AppHeader">
        <div className="nuggetLink"><Link to ="/">Nugget Digital</Link></div>
        <div className="serviceLink"><Link to ="/service">Service</Link></div>
        <div className="developerLink"><Link to ="/developer">Developer</Link></div>
        <div className="companyLink"><Link to ="/company">Company</Link></div>
        <div className="helloLink"><Link to ="/hello">Hello</Link></div>
      </div>
    )
  }
}

export class Footer extends React.Component {
  render () {
    return (
      <footer className="AppFooter">
        Nugget Digital 2020
      </footer>
    )
  }
}
