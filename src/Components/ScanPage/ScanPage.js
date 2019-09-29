import React, { Component } from 'react';
import ScanUploader from '../ScanUploader/ScanUploader';
import './ScanPage.scss';

class ScanPage extends Component {

  state = {
    submitted: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('heyo')
    this.setState({ submitted: true });
  }

  render() {
    return (
      <section className="scan-page-section">
        {this.state.submitted === false && <ScanUploader handleSubmit={this.handleSubmit}/>}
        {this.state.submitted === true && 
          <div className="uploaded-notification">
            <img src={require('../../assets/checkmark.png')} alt="green check mark"/>
            <p>Scan has been uploaded</p>
          </div>
        }
      </section>
    )
  }
}

export default ScanPage;