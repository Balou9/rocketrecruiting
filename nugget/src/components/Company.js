import React from 'react';
import Button from '@material-ui/core/Button';

export class Company extends React.Component {
  render () {
    return (
      <div className="companyContainer" ref={this.companyRef}>
        <div className="col1">
          Enrich your team with talented developers.
        </div>
        <div className="col2">
          Say Hello and let us know which developer profile you're looking for.
          Talent assessment is carried out to ensure quality.
          Our goal is to send you a first selection of suitable developers.
        </div>
        <div className="col3">
          <Button variant="contained">Hire Developers</Button>
        </div>
      </div>
    )
  }
}
