import React from 'react';
import { NavLink } from "react-router-dom";

export class Header extends React.Component {
  constructor (props) {
    super(props)
    this.active = {
      "backgroundColor": "#FFCC00"
    }
  }
  render () {
    return (
      <div className="AppHeader">
        <NavLink className="nuggetLink" to="/home" activeStyle={this.active}>Nugget Digital</NavLink>
        <NavLink className="serviceLink" to="/service" activeStyle={this.active}>Service</NavLink>
        <NavLink className="developerLink" to="/developer" activeStyle={this.active}>Developer</NavLink>
        <NavLink className="companyLink" to="/company" activeStyle={this.active}>Company</NavLink>
        <NavLink className="helloLink" to="/hello" activeStyle={this.active}>Hello</NavLink>
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
