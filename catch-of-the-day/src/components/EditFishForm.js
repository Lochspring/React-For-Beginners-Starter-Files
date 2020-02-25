import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      desc: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    deleteFish: PropTypes.func,
    updateFish: PropTypes.func
  };
  handleChange = e => {
    //e.currentTarget.value;

    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]:
        e.currentTarget.name === "price"
          ? parseFloat(e.currentTarget.value)
          : e.currentTarget.value
    };

    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
          placeholder="Price"
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="desc"
          placeholder="Desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
          placeholder="Image"
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Delete Fish from Inv.
        </button>
      </div>
    );
  }
}

export default EditFishForm;
