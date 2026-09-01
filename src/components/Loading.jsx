import React, { Component } from 'react';
import '../stylesheets/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <div className="loader-dzg" />
      </div>
    );
  }
}

export default Loading;
