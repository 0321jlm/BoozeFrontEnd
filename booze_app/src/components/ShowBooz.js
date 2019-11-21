import React from "react";

class ShowBooz extends React.Component {
  render() {
    return (
      <div>
        <h3>Brewery Info</h3>
        <h4>{this.props.booz.details.name}</h4>
        <h6>Type: {this.props.booz.details.brewery_type}</h6>
        <h6>Street: {this.props.booz.details.street}</h6>
        <h6>City: {this.props.booz.details.city}</h6>
        <h6>State: {this.props.booz.details.state}</h6>
        <h6>Zip: {this.props.booz.details.postal_code}</h6>
        <h6>Phone {this.props.booz.details.phone}</h6>
        <h6>Website: {this.props.booz.details.website_url}</h6>
        <p>Comments: {this.props.booz.comments}</p>
      </div>
    );
  }
}

export default ShowBooz;
