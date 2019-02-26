import React from "react";
import Data from "./data.json";
import ItemsCard from "./ItemsCard";
import WithSearch from "./WithSearch";
const Items = props => {
  const { searchItems } = props;
  return (
    <div>
      <div>
        <h3>All Data</h3>
        {Data
          // Filter  by the inputted search items
          .filter(
            item =>
              `${item.name} ${item.email} ${item.location}`
                .toUpperCase()
                .indexOf(searchItems.toUpperCase())!== -1
          )
          // Loop through the items
          .map(item => (
            <ItemsCard key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};
export default WithSearch(Items);
