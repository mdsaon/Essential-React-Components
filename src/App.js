import React, { Component } from 'react';
import ToggleComponent from './components/ToggleComponent/index';
import StyledComponent from './components/StyledComponentExample';
import HigherOrderComponentExample from './components/HigherOrderComponentExample';
import Items from './components/HigherOrderComponentExample/Items';
import ChartsComponent from './components/ChartsComponent';
import ButtonTextChange from './components/ButtonTextChange';
import DataGridExample from './components/DataGridExample';
import ErrorHandlingWithAxios from './components/ErrorHandlingWithAxios';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ErrorHandlingWithAxios/>
         <DataGridExample />
        <ToggleComponent />
        <StyledComponent />
        <HigherOrderComponentExample />
        <Items />
        <ChartsComponent/>
        <ButtonTextChange />
      </div>
    );
  }
}

export default App;
