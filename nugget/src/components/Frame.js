import React from 'react';
import { NavLink } from "react-router-dom";

export class Header extends React.Component {
  render () {
    return (
      <div className="AppHeader">
        <NavLink className ="nuggetLink" to ="/">Nugget Digital</NavLink>
        <NavLink className="serviceLink" to ="/service">Service</NavLink>
        <NavLink className="developerLink" to ="/developer">Developer</NavLink>
        <NavLink className="companyLink" to ="/company">Company</NavLink>
        <NavLink className="helloLink" to ="/hello">Hello</NavLink>
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
