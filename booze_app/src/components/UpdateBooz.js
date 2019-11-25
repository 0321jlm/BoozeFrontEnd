import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

class UpdateBooz extends Component {
  constructor() {
    super();
    this.state = {
      rating: {},
      comments: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("mounted", this.props);
    this.setState({
      rating: this.props.booz.rating,
      comments: this.props.booz.comments,
      name: this.props.booz.details.name
    });
  }

  async handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      const boozID = this.props.booz._id;
      const url = `http://localhost:3003/booz/${boozID}`;
      const payload = {
        rating: this.state.rating,
        comments: this.state.comments
      };
      console.log("in handle submit", url, "Payload", payload);

      const updatedBooz = await axios.put(url, payload);
      this.props.getModel();
      this.setState({
        rating: {},
        comments: ""
      });
    } catch (err) {
      console.log("Update Submit Error: ", err);
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="rating">Rating: </label>
            <input
              type="number"
              name="rating"
              onChange={this.handleChange}
              value={this.state.rating}
              style={{ width: "30px" }}
            />
            <br />
            <label htmlFor="comments">Comments: </label>
            <input
              type="text"
              name="comments"
              onChange={this.handleChange}
              value={this.state.comments}
              style={{ width: "400px" }}
            />
            <br />
            <Button variant="outline-primary" size="sm" type="submit">
              Update Booz
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateBooz;
