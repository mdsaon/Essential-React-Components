import React from "react";
const ItemsCard = (item) => {
  return (
    <div>
       {item.name}{item.email}{item.location}
    </div>
  );
};
export default ItemsCard;
