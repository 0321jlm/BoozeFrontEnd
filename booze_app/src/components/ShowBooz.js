import React from "react";

class ShowBooz extends React.Component {
  render() {
    return (
      <div>
        <h3>Brewery Info</h3>
        <h4>{this.props.booz.name}</h4>
        <h6>Type: {this.props.booz.brewery_type}</h6>
        <h6>Street: {this.props.booz.street}</h6>
        <h6>City: {this.props.booz.city}</h6>
        <h6>State: {this.props.booz.state}</h6>
        <h6>Zip: {this.props.booz.postal_code}</h6>
        <h6>Phone {this.props.booz.phone}</h6>
        <h6>
          Website:{" "}
          <a href="{this.props.booz.website_url}" target="_blank">
            {this.props.booz.website_url}
          </a>
        </h6>
        <p>Comments: {this.props.booz2.comments}</p>
      </div>
    );
  }
}

export default ShowBooz;
