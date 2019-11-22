import React, { Component } from "react";
import axios from "axios";

class UpdateBooz extends Component {
  constuctor() {
    // super();
    this.state = {
      rating: 0,
      comments: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      rating: this.props.booz.rating,
      comments: this.props.booz.comments
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    // try {
    //   event.preventDefault();
    //   const boozID = this.props.booz._id;
    //   const url = `http://localhost:3003/booz/${boozID}`;
    //   const payload = {
    //     rating: this.state.rating,
    //     comments: this.state.comments
    //   }
    //   const updatedBooz = await axios.put(url, payload);
    //   this.props.getBooz();
    //   this.setState({
    //     rating: {},
    //     comments: ''
    //   }
    //   ) catch (err){
    //     console.log('Update Submit Error: ', err);
    //   }
    // }
  }

  render() {
    return (
      <div>
        <h1>Update Info</h1>
        <form onSubmit={() => this.handleSubmit}>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              name="rating"
              id="rating"
              OnChange={this.handleChange}
              // value={this.state.rating}
            />
            <label htmlFor="comments">Comments:</label>
            <input
              type="text"
              name="comments"
              id="comments"
              onChange={this.handleChange}
              // value={this.state.comments}
            />
            <input type="submit" value="Update Booz" />
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateBooz;
