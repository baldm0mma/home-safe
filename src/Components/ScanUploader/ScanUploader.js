import React, { Component } from 'react';
import './ScanUploader.scss'

class ScanUploader extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      houseScan: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let buttonDisabled;
    
    if (this.state.houseScan === '') {
      buttonDisabled = true;
    } else {
      buttonDisabled = false;
    }

    return (
      <form className="scan-form">
        <label className="house-scan-label" htmlFor="house-scan">Upload 3-D Scan of House</label>
        <input 
          id="house-scan"
          className="scan-upload-button"
          name="houseScan"
          type="file"
          accept=".jpg"
          value={this.state.houseScan}
          onChange={(e) => this.handleChange(e)}
        />
        {this.state.houseScan !== '' && 
          <div className="selected-file-container">
            <p className="selected-file">{this.state.houseScan}</p>
          </div>
        }
        {this.state.houseScan === '' && 
          <div className="selected-file-container">
            <p className="selected-file">No File Selected</p>
          </div>
        }
        <button 
          className="scan-submit-button" 
          onClick={(e) => this.props.handleSubmit(e)} 
          disabled={buttonDisabled}
        >Submit Scan</button>
      </form>
    )
  }
}

export default ScanUploader;