import React, { Component } from 'react';
import TestComponent from './TestComponent';
class ToggleComponent extends Component {
  state = {isToggle: false}
  handleClick = () => {
    this.setState(prevState =>({ isToggle: !prevState.isToggle }))
  }
  render() {
    return (
      <div>
          <h1>Toggle Component</h1>
           <button onClick= {this.handleClick}>
             ClickToToggle
           </button>
           {this.state.isToggle ? <TestComponent />:null}
      </div>
    );
  }
}
export default ToggleComponent;
