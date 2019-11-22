import React, { Component } from "react";
// import CreateForm from "./CreateForm";
import ShowBooz from "./ShowBooz";
import UpdateBooz from "./UpdateBooz";
import NewBooz from "./NewBooz.js";
import axios from "axios";
let baseURL = process.env.REACT_APP_BASEURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
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
      firstRow: []
    };
    this.getModel = this.getModel.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.getBooz = this.getBooz.bind(this);
  }
  componentDidMount() {
    this.getModel();
    // console.log("in Did mounbt", boozData);
    // this.getBooz();
  }

  async handleEditButton(clickedBrewery) {
    // console.log("Clicked Edit Button");
    await this.setState({
      editButton: true,
      selectedBrewery: clickedBrewery
    });
  }

  async handleDeleteButton(id) {
    try {
      const url = `${baseURL}/booz/${id}`;
      console.log("In delete url", url);
      await axios.delete(url);
    } catch (err) {
      console.log("DELETE Error: ", err);
    }
  }

  async getBooz(boozobj) {
    this.setState({
      boozToShow: boozobj.details,
      boozComments: boozobj
    });
  }

  async getModel(bookmarkID) {
    const response = await axios.get(`${baseURL}`);
    const data = response.data;
    // firstRow = data[0];
    // console.log("in getMOdel", data[0]);
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
      boozData: data
    });
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
          <div className="row">
            <div className="col-sm">
              <table>
                <tbody>
                  {this.state.boozData.map(boozd => {
                    return (
                      <tr
                        key={boozd._id}
                        onMouseOver={() => this.getBooz(boozd)}
                      >
                        <td>{boozd.details.name}</td>
                        <td align="left">
                          {boozd.star1 === "X" && (
                            <img
                              src="/star.png"
                              alt="x"
                              width="25"
                              height="18"
                            />
                          )}
                          {boozd.star2 === "X" && (
                            <img
                              src="/star.png"
                              alt="x"
                              width="25"
                              height="18"
                            />
                          )}
                          {boozd.star3 === "X" && (
                            <img
                              src="/star.png"
                              alt="x"
                              width="25"
                              height="18"
                            />
                          )}
                          {boozd.star4 === "X" && (
                            <img
                              src="/star.png"
                              alt="x"
                              width="25"
                              height="18"
                            />
                          )}
                          {boozd.star5 === "X" && (
                            <img
                              src="/star.png"
                              alt="x"
                              width="25"
                              height="18"
                            />
                          )}
                        </td>

                        <td>
                          <button onClick={() => this.handleEditButton(boozd)}>
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => this.handleDeleteButton(boozd._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-sm">
              <section>{showEditForm}</section>
            </div>
          </div>
          <div className="row">
            <NewBooz handleNewBooz={this.handleNewBooz} />
          </div>
        </div>
      </main>
    );
  }
}

export default Booz;
