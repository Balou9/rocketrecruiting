import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export class Home extends React.Component {
  render () {
    return (
      <div className="animationHeader">
        <div className="col1">
          <div className="headerTitle">Recruiting West African Developers for European Businesses</div>
        </div>
        <div className="col2">
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">

          </svg>
        </div>
        <div className="col3">
          <div className="rocketHeader">
            <NavLink className="serviceCta" to="/developer">You're interested in working abroad?</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export class Service extends React.Component {
  render () {
    return (
      <div className="serviceContainer">
        <div className="col1">
          Nugget Digital recruits developers with at least one of the following profiles.
        </div>
        <div className="col2">
          <li>AWS Engineer</li>
          <li>Backend Engineer</li>
          <li>Java Developer</li>
          <li>Javascript Developer</li>
          <li>Mobile Developer (Android/iOS)</li>
        </div>
        <div className="col3">
          <Link className="developerCta" to="/developer">Apply for a job</Link>
          <Link className="companyCta" to="/company">Hire Developers</Link>
        </div>
      </div>
    )
  }
}

export class Developer extends React.Component {
  render () {
    return (
      <div className="developerContainer">
        <div className="col1">
          Become a developer for European Businesses
        </div>
        <div className="col2">
          <div className="developerOutline">
          Take the opportunity to apply for software developer jobs in European IT Companies.
          Send us an email in which you introduce yourself and your programming skills.
          Link your <a className="githubLink" href="https://github.com"> Github </a> profile or add an attachment/link to a project or repository you have contributed to.
          </div>
        </div>
        <div className="col3">
          <Link className="helloCta" to="/hello" variant="contained" color="primary">Apply for a job</Link>
        </div>
      </div>
    )
  }
}

export class Company extends React.Component {
  render () {
    return (
      <div className="companyContainer">
        <div className="col1">
          Enrich your team with talented developers
        </div>
        <div className="col2">
          Say Hello and let us know which developer profile you're looking for.
          Talent assessment is carried out to ensure quality.
          Our goal is to send you a first selection of suitable developers.
        </div>
        <div className="col3">
          <Link className="helloCta" to="/hello" variant="contained" color="primary">Hire Developers</Link>
        </div>
      </div>
    )
  }
}

export class Hello extends React.Component {
  render () {
    return (
      <div className="helloContainer">
        <div className="col1">
          Say hello
        </div>
        <div className="col2">
          <a className="contactCta" href="mailto:hello@nuggetdigital.com">hello@nuggetdigital.com</a>
        </div>
        <div className="col3">
        </div>
      </div>
    )
  }
}
