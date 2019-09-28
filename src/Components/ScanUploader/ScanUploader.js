import React, { Component } from 'react';

class ScanUploader extends Component {
  state = {
    Upload: ''
  }

  render() {
    return (
      <form>
        <label for="house-scan">Upload 3-D Scan of House</label>
        <input 
          id="house-scan"
          class="upload-button"
          name="house-scan"
          type="file"
          accept=".xyz"
        />
      </form>
    )
  }
}

export default ScanUploader;