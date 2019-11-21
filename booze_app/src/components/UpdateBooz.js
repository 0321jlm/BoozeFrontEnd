import React from "react";
import axios from "axios";

class UpdateBooz extends React.Component {
  constuctor(prop) {
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  async Update(updated)

  render() {
    return (
      <div>
        <h1>Update Info for {this.props.booz.details.name}</h1>
        <form onSubmit={() => this.Update(this.props.booz)}>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              name="rating"
              id="rating"
              OnChange={this.props.handleChange}
              value={this.props.rating}
            />
            <label htmlFor="comments">Comments:</label>
            <input
              type="text"
              name="comments"
              id="comments"
              onChange={this.props.handleChange}
              value={this.props.value}
            />
            <button>Update</button>
          </div>
        </form>
      </div>
    );
  }
}
