import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult.jsx';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

class App extends Component {
  

  state = {
    SearchResults: [],
    loading: false
  }



  onSearch = (value) => {
      this.setState({ loading: true }, () => {
      console.log('search', value);
      axios.get('http://127.0.0.1:8000/search/' + value)
        .then((result) => {
          console.log(result);
          this.setState({ 
            loading: false,
            SearchResults: result.data })
        })
    });
}

  render() {
    const { loading } = this.state;
    return (
      <div className="wrapper">
        <SearchBar onSearch={this.onSearch} />
        {loading ? <LoadingSpinner /> : <SearchResult SearchResults={this.state.SearchResults}/>}
      </div>
    );
  }
}

export default App;
