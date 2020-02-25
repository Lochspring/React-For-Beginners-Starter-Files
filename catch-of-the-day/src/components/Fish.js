import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      desc: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addOrder: PropTypes.func
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
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addOrder(this.props.index)}
        >
          {isAvailable ? "Add to Order" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;
