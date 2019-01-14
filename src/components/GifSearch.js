import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    value: ''
  }

  handleSearchEntry = event => {
    const value = event.target.value;
    this.setState({ value });
  };

  preventDefault = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.preventDefault}>
        <div>
          <label>Enter A Search Term:</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleSearchEntry}
          />
        </div>

        <input type="submit" />
      </form>
    );
  }

}
