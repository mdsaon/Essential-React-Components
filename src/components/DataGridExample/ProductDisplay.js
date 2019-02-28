import React from "react";
const ProductDisplay = (product) => {
  return (
    <div className="list-items-data">
        <span>{product.name}</span><span>{product.price}</span><span>{product.description}</span>
    </div>
  );
};
export default ProductDisplay;
