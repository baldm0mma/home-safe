import React, { Component } from 'react';
import ScanUploader from '../ScanUploader/ScanUploader';
import { connect } from 'react-redux';
import './ScanPage.scss';

class ScanPage extends Component {

  state = {
    submitted: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
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

const mapDispatchToProps = dispatch => ({

})

export default connect(null, mapDispatchToProps)(ScanPage);