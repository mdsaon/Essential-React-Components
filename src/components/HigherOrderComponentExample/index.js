import React from "react";
import Hoc from './Hoc';
const HigherOrderComponentExample = (props) => {
  return <div>
      <h1>Higher Order Component Example</h1>
       <p>My Name is {props.username}</p>
      </div>;
};
export default Hoc(HigherOrderComponentExample);
