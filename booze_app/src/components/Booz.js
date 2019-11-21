import React, { Component } from "react";
// import CreateForm from "./CreateForm";
// import EditForm from "./EditForm";
import axios from "axios";
let baseURL = process.env.REACT_APP_BASEURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

class BoozMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 0,
      deleteButton: false,
      editButton: false,
      boozData: [],
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
  }

  async handleEditButton(clickedBookmark) {
    console.log("Clicked Edit Button");
    // await this.setState({
    //   editButton: true,
    //   selectedBookmark: clickedBookmark
    // });
    // console.log("Current Bookmark: ", this.state.selectedBookmark);
  }

  async handleDeleteButton(id) {
    try {
      const url = `${baseURL}/${id}`;

      console.log("Clicked Delete Button url", url);
      await axios.delete(url);
    } catch (err) {
      console.log("DELETE Error: ", err);
    }
  }

  async getBooz(boozobj) {
    this.setState({ boozToShow: boozobj });
    // console.log(boozobj);
  }
  async getModel(bookmarkID) {
    // const url = `http://localhost:3003/`;
    const response = await axios.get(`${baseURL}`);
    const data = response.data;
    // console.log("data f", data[0].rating);
    this.setState({
      boozData: data
    });

    // console.log("get Error: ", err);
  }

  render() {
    // const { allBookmarks, getBookmarks } = this.props;
    // const { editButton, selectedBookmark } = this.state;
    // const showEditForm = editButton ? (
    //   <EditForm bookmark={selectedBookmark} getBookmarks={getBookmarks} />
    // ) : (
    //   <CreateForm getBookmarks={getBookmarks} />
    // );
    return (
      <main>
        <h1>Booz header 2</h1>
        <section>
          <table>
            <tbody>
              {this.state.boozData.map(boozd => {
                return (
                  //   <p key={boozd._id}>fred {boozd._id}></p>
                  <tr key={boozd._id} onMouseOver={() => this.getBooz(boozd)}>
                    <td>{boozd.details.name}</td>
                    <td>rating {boozd.rating}</td>
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

                  //     <td>
                  //       <button onClick={() => this.handleEditButton(bookmark)}>
                  //         Edit
                  //       </button>
                  //     </td>
                );
              })}
            </tbody>
          </table>
        </section>
        {/* {this.state.boozToShow && (
          <ShowBooz

            booz={this.state.boozToShow}
          />
        )} */}
        {/* <section>{showEditForm}</section> */}
      </main>
    );
  }
}

export default BoozMain;
