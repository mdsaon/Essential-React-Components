import React, { Component } from 'react';
import ToggleComponent from './components/ToggleComponent/index';
import StyledComponent from './components/StyledComponentExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleComponent />
        <StyledComponent />
      </div>
    );
  }
}

export default App;
