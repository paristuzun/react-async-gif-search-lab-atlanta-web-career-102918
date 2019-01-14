import React, { Component } from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'


export default class GifListContainer extends Component {

  constructor(){
    super()
    this.state = {
      gifs: [],
      search: ''
    }
  }

  handleSubmit = query => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(json => {
        this.setState({ gifs: json.data.slice(0, 5) });
      });
  };

  render() {
    return (
         <div>
            <div>
              <GifSearch handleSubmit={this.handleSubmit} />
            </div>
         <div>
            <GifList gif={this.state.gifs} />
          </div>
        </div>  
    );
  }


} //end GifListContainer
