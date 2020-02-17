import React, { Component } from "react";

export default class Search extends Component {
  state = {
    term: ""
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.submitText(this.state.term); //passing prop to parent component
    //console.log(this.state.term); //"this" is undefined here.. so better use an arrow function
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} action='' className='ui form'>
          <div className='field'>
            <label htmlFor=''>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
