import React, { Component } from "react";
import ProductDisplay from "./ProductDisplay";
import "./Style.css";

class DataGridExample extends Component {
  state = {
    products: [
      {
        name: "Laptop",
        price: "$500",
        description: "High Configuration"
      },
      {
        name: "Mobile",
        price: "$500",
        description: "High Configuration"
      },
      {
        name: "Desktop",
        price: "$500",
        description: "High Configuration"
      }
    ]
  };
  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>Data Grid</h1>
        <div className="list-items">
          <div className="list-items-heading">
            <span>Name</span>
            <span>Price</span>
            <span>Description</span>
          </div>
          {products.map(product => (
            <ProductDisplay key={product.name} {...product} />
          ))}
        </div>
      </div>
    );
  }
}
export default DataGridExample;
