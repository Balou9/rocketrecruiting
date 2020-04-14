import React from 'react';
import Button from '@material-ui/core/Button';

export class Hello extends React.Component {
  render () {
    return (
      <div className="helloContainer" ref={this.helloRef}>
        <div className="col1">
          Say hello and let us know if you are open for a job opportunities in Europe or looking to hire developers.
        </div>
        <div className="col2">
          <Button>hello@nuggetdigital.com</Button>
        </div>
        <div className="col3">
        </div>
      </div>
    )
  }
}
