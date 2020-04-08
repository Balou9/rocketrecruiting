import React from 'react';
import Button from '@material-ui/core/Button';


export class Service extends React.Component {
  render () {
    return (
      <div className="serviceContainer">
        <div className="col1">
          Nugget Digital recruits developers with at least one of the following profiles for European Businesses.
        </div>
        <div className="col2">
          <li>AWS Engineer</li>
          <li>Backend Engineer</li>
          <li>Cloud Architect</li>
          <li>DevOps Engineer</li>
          <li>Frontend Developer</li>
          <li>Java Developer</li>
          <li>Javascript Developer</li>
          <li>Mobile Developer (Android/iOS)</li>
        </div>
        <div className="col3">
          <Button variant="contained">Apply for a job</Button>
          <Button variant="contained">Hire Developers</Button>
        </div>
      </div>
    )
  }
}
