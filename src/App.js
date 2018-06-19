import React, { Component } from 'react';
import './App.css';

class ExplainBindingsComponent extends Component {
//this is without the explicit binding in the constructor,
//which would look like:
//this.onClickMe = this.onClickMe.bind(this);

  onClickMe = () => {
    console.log(this);
  }
  render() {
    return (
      <button
      onClick={this.onClickMe}
      type="button"
      >
      Click Me
      </button>
    );
  }
}
export default ExplainBindingsComponent;
