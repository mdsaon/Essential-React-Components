import React from "react";

const Hoc = WrappedComponent => props => {
  const username = "Saidur Rahman";
  return (
    <div>
      <WrappedComponent username={username} {...props} />
    </div>
  );
};
export default Hoc;
