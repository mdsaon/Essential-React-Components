import React, { Component } from 'react';
import ToggleComponent from './components/ToggleComponent/index';
import StyledComponent from './components/StyledComponentExample';
import HigherOrderComponentExample from './components/HigherOrderComponentExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleComponent />
        <StyledComponent />
        <HigherOrderComponentExample />
      </div>
    );
  }
}

export default App;
