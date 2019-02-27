import React, { Component } from "react";
class ButtonTextChange extends Component {
  state = { isChange: true };
  handleClick = () => {
    this.setState(prevState => ({ isChange: !prevState.isChange }));
  };
  render() {
    return (
      <div>
        <h1>Button Text Change Component</h1>
        <button onClick={this.handleClick}>
        {this.state.isChange ? "Push ME":"Pull Me"}
        </button>
      </div>
    );
  }
}
export default ButtonTextChange;
