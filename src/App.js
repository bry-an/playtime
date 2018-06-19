import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ExplainBindingsComponent extends Component {
  onLickMe() {
    console.log(this);
  }

  render() {
    return (
      <botton
      onClick={this.onClickMe}
      type="button"
      >
      Click Me
      </button>
    );
  }
}
export default App;
