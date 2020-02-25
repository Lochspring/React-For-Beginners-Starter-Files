import React from "react";
import PropTypes from "prop-types";
import { getFunName, slugify } from "../helpers.js";

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  myInput = React.createRef();

  selectStore = event => {
    event.preventDefault();
    let slug = slugify(this.myInput.current.value);
    console.log(this);
    this.props.history.push(`/store/${slug}`);
  };

  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.selectStore}>
          <h2>Please enter a form</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store </button>
        </form>
      </>
    );
  }
}

export default StorePicker;
