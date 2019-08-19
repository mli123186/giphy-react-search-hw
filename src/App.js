import React, { Component } from 'react';
import GifList from './GifList';
import SearchBar from './SearchGif';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };
    this.handleTermChange = this.handleTermChange.bind(this);
  }
 
  handleTermChange(term) {
      
      let url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=KekmcRvFtmmogfBuI3KaVohc0iqETCGk&limit=10`;
      fetch(url)
        .then(response => response.json())
        .then((gifs) => {
          
          this.setState({
            gifs: gifs.data,
          })
        }); 
      };

  

  render() {
    return (
      <div className="search">
        <SearchBar onChange={term => this.handleTermChange(term)} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  };

}
    
  


export default App
