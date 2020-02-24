import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  updateOrder = () => {
    this.props.addOrder(this.props.index);
  };
  render() {
    const { image, desc, name, status, price } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.updateOrder}>
          {isAvailable ? "Add to Order" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;
