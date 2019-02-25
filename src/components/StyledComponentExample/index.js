import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Text = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-family:Arial, Helvetica, sans-serif;
`;

class StyledComponentExample extends Component {
  render() {
    return (
      <div>
          <Title>Styled Component Example</Title>
          <Text>Hello from Styled Component</Text>
      </div>
    );
  }
}
export default StyledComponentExample;
