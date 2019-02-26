import React, { Component } from "react";

const WithSearch = WrappedComponent => {
  return class extends Component {
    state = { searchItems: "" };
    handleSearch = (e)=>{
        this.setState({searchItems:e.target.value})
    }
    render() {
      return (
        <div>
          <div>
              <h3>Example With Search data</h3>
            <input
              type="text"
              value={this.state.searchItems}
              onChange={this.handleSearch}
              placeholder="Enter Your Search Items..."
            />
          </div>
          <WrappedComponent searchItems={this.state.searchItems} />
        </div>
      );
    }
  };
};
export default WithSearch;
