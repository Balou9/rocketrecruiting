import React from 'react';
import Button from '@material-ui/core/Button';

export class Developer extends React.Component {
  render () {
    return (
      <div className="developerContainer">
        <div className="col1">
          You're interested in working abroad?
        </div>
        <div className="col2">
          Take the opportunity to apply for software developer jobs in European IT Companies.
          Send us an email in which you introduce yourself and your programming skills.
          Link your <Button>Github</Button> profile or add an attachment/link to a project or repository you have contributed to.
        </div>
        <div className="col3">
          <Button variant="contained">Apply for a job</Button>
        </div>
      </div>
    )
  }
}
