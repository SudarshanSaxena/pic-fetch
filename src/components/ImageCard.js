import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    //console.log(this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener("load", this.setSpans); //select image height only after image is loaded
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans: spans });
  };
  render() {
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        ref={this.imageRef}
        src={this.props.image.urls.regular}
      ></img>
    );
  }
}
