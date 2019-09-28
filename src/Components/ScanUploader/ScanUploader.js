import React, { Component } from 'react';

class ScanUploader extends Component {
  state = {
    houseScan: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor="house-scan">Upload 3-D Scan of House</label>
        <input 
          id="house-scan"
          className="upload-button"
          name="houseScan"
          type="file"
          accept=".xyz"
        />  
      </form>
    )
  }
}

export default ScanUploader;