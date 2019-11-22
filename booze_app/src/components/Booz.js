import React, { Component } from "react";
// import CreateForm from "./CreateForm";
import ShowBooz from "./ShowBooz";
import UpdateBooz from "./UpdateBooz";
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
      selectedBrewery: {}
    };
    this.getModel = this.getModel.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.getBooz = this.getBooz.bind(this);
  }
  componentDidMount() {
    // console.log("Booz Form Mounted in componentDidMount");
    this.getModel();
    // console.log("in did mount data boozData = ", this.state.boozData[0]);
  }

  async handleEditButton(clickedBrewery) {
    console.log("Clicked Edit Button");
    await this.setState({
      editButton: true,
      selectedBrewery: clickedBrewery
    });
  }

  async handleDeleteButton(id) {
    try {
      const url = `${baseURL}/booz/${id}`;
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
    // const { allBookmarks, getBookmarks } = this.props;
    // const { editButton, selectedBookmark } = this.state;
    const showEditForm = this.state.editButton ? (
      <UpdateBooz
        booz={this.state.selectedBrewery}
        booz2={this.state.boozComments}
      />
    ) : (
      <ShowBooz booz={this.state.boozToShow} booz2={this.state.boozComments} />
    );
    return (
      <main>
        <h1>Favorite Breweries</h1>
        <section>
          <table>
            <tbody>
              {this.state.boozData.map(boozd => {
                return (
                  <tr key={boozd._id} onMouseOver={() => this.getBooz(boozd)}>
                    <td>{boozd.details.name}</td>

                    <td>{boozd.star1}</td>
                    <td>{boozd.star2}</td>
                    <td>{boozd.star3}</td>
                    <td>{boozd.star4}</td>
                    <td>{boozd.star5}</td>

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
        </section>
        <section>
          {/* {this.state.boozToShow && (
            <ShowBooz
              booz={this.state.boozToShow}
              booz2={this.state.boozComments}
            />
          )} */}
          <UpdateBooz
            booz={this.state.selectedBrewery}
            // booz2={this.state.boozComments}
          />
        </section>
        {/* <section>{showEditForm}</section> */}
      </main>
    );
  }
}

export default Booz;
