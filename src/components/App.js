import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./Search";
import InageList from "./ImageList";
import Footer from "./Footer";
import "./bg.css";

export default class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    //will recieve props from child searchbar component
    console.log(term);
    const response = await unsplash //previously used prmoise but then threw error while setting state
      .get("/search/photos", {
        //async request--- will take some time to return data
        params: { query: term }
      });

    console.log(this);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div
        className='ui container'
        style={{ marginTop: "10px", backgroundColor: "" }}
      >
        <SearchBar submitText={this.onSearchSubmit} />
        <h2>Found {this.state.images.length} images.</h2>
        <InageList images={this.state.images}></InageList>
        <Footer></Footer>
      </div>
    );
  }
}
