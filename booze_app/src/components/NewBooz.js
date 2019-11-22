import React from "react";
import axios from "axios";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "https://fathomless-sierra-68956.herokuapp.com";
}

class NewBooz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      url: "",
      booz: [],
      apiIsLoad: false
    };
    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    // console.log("Edit Form Mounted");
    // console.log("this props booz: ", this.props.booz);
  }

  async callApi() {
    try {
      const response = await axios(
        "https://api.openbrewerydb.org/breweries?by_state=connecticut"
      );
      const data = response.data;
      this.setState({ booz: data, apiIsLoad: true });
      console.log("API data: ", this.state.booz);
    } catch (err) {
      console.log("API call Error: ", err);
    }
  }

  render() {
    return (
      <div>
        <button
          className="get"
          onClick={() => {
            this.callApi();
          }}
        >
          Get Booz:
        </button>
        <table>
          <tbody>
            {this.state.booz.map(aBooz => {
              return (
                <tr key={aBooz.id}>
                  <td>{aBooz.name}</td>
                  <td>{aBooz.website_url}</td>
                  <td onClick={() => this.props.handleNewBooz({ aBooz })}>X</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default NewBooz;
