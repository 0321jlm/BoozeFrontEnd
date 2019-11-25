import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

// let baseURL = process.env.REACT_APP_BASEURL;

class NewBooz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      stateCode: "",
      url: "",
      booz: [],
      apiIsLoad: false
    };
    this.callApi = this.callApi.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  componentDidMount() {
    console.log("Edit Form Mounted");
  }

  async handleRequest(event) {
    console.log("event target: ", event.target);
    console.log("event target value: ", event.target.value);
    console.log("event target name: ", event.target.name);

    const { name, value } = event.target;

    await this.setState({
      [name]: value
    });
  }
  async callApi(event) {
    console.log("in call api");
    event.preventDefault();

    const inputValue = this.state.stateCode;

    console.log("state code: ", inputValue);
    try {
      const response = await axios(
        `https://api.openbrewerydb.org/breweries?by_state=${inputValue}`
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
      <div id="newBoozRow">
        <form onSubmit={this.callApi}>
          <label htmlFor="stateCode">Search by State: </label>
          <input
            type="text"
            name="stateCode"
            value={this.state.stateCode}
            onChange={this.handleRequest}
            style={{ width: "100px" }}
          />
          <Button
            variant="outline-primary"
            size="sm"
            type="submit"
            // onClick={() => {
            //   this.callApi();
            // }}
          >
            Get Booz:
          </Button>
        </form>

        <table>
          <tbody>
            {this.state.booz.map(aBooz => {
              return (
                <tr key={aBooz.id}>
                  <td>{aBooz.name}</td>
                  <td>{aBooz.website_url}</td>
                  <td onClick={() => this.props.handleNewBooz(aBooz)}>
                    <img src="/Add-icon.png" alt="x" width="23" height="18" />
                  </td>
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
