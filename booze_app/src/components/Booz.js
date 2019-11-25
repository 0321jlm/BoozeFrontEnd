import React, { Component } from "react";
import ShowBooz from "./ShowBooz";
import UpdateBooz from "./UpdateBooz";
import NewBooz from "./NewBooz.js";
import axios from "axios";
import Button from "react-bootstrap/Button";
let baseURL = process.env.REACT_APP_BASEURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://booz-api.herokuapp.com/";
}

class Booz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 0,
      deleteButton: false,
      editButton: false,
      starList: "",
      boozToShow: {},
      boozData: [],
      boozComments: {},
      selectedBrewery: {},
      baseURL: "",
      firstRow: {}
    };
    this.getModel = this.getModel.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.getBooz = this.getBooz.bind(this);
    this.handleNewBooz = this.handleNewBooz.bind(this);
  }
  componentDidMount() {
    this.getModel();
  }

  async handleEditButton(clickedBrewery) {
    await this.setState({
      editButton: true,
      selectedBrewery: clickedBrewery
    });
  }

  async handleDeleteButton(id) {
    try {
      const url = `${baseURL}/booz/${id}`;
      // console.log("In delete url", url);
      await axios.delete(url);
    } catch (err) {
      console.log("DELETE Error: ", err);
    }
    this.getModel();
  }

  async getBooz(boozobj) {
    this.setState({
      boozToShow: boozobj.details,
      boozComments: boozobj
    });
  }

  async getModel(bookmarkID) {
    const response = await axios.get(`${baseURL}`);
    // const response = await axios.get(`${baseURL}`, {
    //   params: {
    //     orderby: { rating: -1 }
    //   }
    // });

    console.log("data", response.data);
    const data = response.data;

    let i = 0;
    for (i = 0; i < data.length; i++) {
      if (data[i].rating === 1) {
        data[i].star1 = "X";
      }
      if (data[i].rating === 2) {
        data[i].star1 = "X";
        data[i].star2 = "X";
      }
      if (data[i].rating === 3) {
        data[i].star1 = "X";
        data[i].star2 = "X";
        data[i].star3 = "X";
      }
      if (data[i].rating === 4) {
        data[i].star1 = "X";
        data[i].star2 = "X";
        data[i].star3 = "X";
        data[i].star4 = "X";
      }
      if (data[i].rating === 5) {
        data[i].star1 = "X";
        data[i].star2 = "X";
        data[i].star3 = "X";
        data[i].star4 = "X";
        data[i].star5 = "X";
      }
    }

    this.setState({
      boozData: data.reverse(),
      editButton: false
    });

    let firstRow1 = data[0];
    this.getBooz(firstRow1);
  }

  async handleNewBooz(aBooz) {
    console.log("new", aBooz);
    const addBooz = {
      rating: "",
      comments: "",
      details: aBooz
    };

    console.log("handle new booz entered: ", addBooz);
    // event.preventDefault();
    console.log("baseURL: ", baseURL);
    const response = await axios.post(`${baseURL}/booz`, addBooz);
    this.getModel();

    this.setState({
      details: aBooz,
      rating: "",
      comments: ""
    });
    // console.log("this state: ", this.state);
  }
  render() {
    const { baseURL } = this.props;
    const showEditForm = this.state.editButton ? (
      <UpdateBooz booz={this.state.selectedBrewery} getModel={this.getModel} />
    ) : (
      <ShowBooz booz={this.state.boozToShow} booz2={this.state.boozComments} />
    );
    return (
      <main>
        <h1>Favorite Breweries</h1>

        <div className="container">
          <div
            className="row"
            // style={{
            //   backgroundColor: "white"
            // }}
          >
            <div className="col">
              <table>
                <tbody>
                  {this.state.boozData.map(boozd => {
                    return (
                      <tr
                        key={boozd._id}
                        onMouseOver={() => this.getBooz(boozd)}
                      >
                        <td>{boozd.details.name}</td>
                        <td align="left" className="text-nowrap">
                          {boozd.star1 === "X" && (
                            <img
                              src="/star.png"
                              alt="x"
                              width="23"
                              height="18"
                            />
                          )}
                          {boozd.star2 === "X" && (
                            <img
                              src="/star.png"
                              alt="x"
                              width="23"
                              height="18"
                            />
                          )}
                          {boozd.star3 === "X" && (
                            <img
                              src="/star.png"
                              alt="x"
                              width="23"
                              height="18"
                            />
                          )}
                          {boozd.star4 === "X" && (
                            <img
                              src="/star.png"
                              alt="x"
                              width="23"
                              height="18"
                            />
                          )}
                          {boozd.star5 === "X" && (
                            <img
                              src="/star.png"
                              alt="x"
                              width="23"
                              height="18"
                            />
                          )}
                        </td>

                        <td>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => this.handleEditButton(boozd)}
                          >
                            Edit
                          </Button>
                        </td>
                        <td>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => this.handleDeleteButton(boozd._id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col">
              <section>{showEditForm}</section>
            </div>
          </div>
          <div className="row" id="newBoozRow">
            <NewBooz
              handleNewBooz={this.handleNewBooz}
              getModel={this.getModel}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Booz;
