import React from 'react';
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render () {
    return (
      <div className="AppHeader">
        <Link className ="nuggetLink" to ="/">Nugget Digital</Link>
        <Link className="serviceLink" to ="/service">Service</Link>
        <Link className="developerLink" to ="/developer">Developer</Link>
        <Link className="companyLink" to ="/company">Company</Link>
        <Link className="helloLink" to ="/hello">Hello</Link>
      </div>
    )
  }
}

export class Footer extends React.Component {
  render () {
    return (
      <div className="AppFooter">
        © Nugget Digital 2020
      </div>
    )
  }
}
