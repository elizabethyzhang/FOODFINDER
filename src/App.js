import React, { Component } from 'react';
import './App.css';
import MapContainer from './map/map.js';
import BusinessList from './yelp/businesslist.js';
import SearchBar from './yelp/searchbar.js';
import Yelp from './yelp/yelp.js';

export class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy)
    .then((businesses) => {
      this.setState({
        businesses: businesses
      })
    })
  }

  render(){
    return (
      <div className="App">
        <h1> Food Finder</h1>  

        <p className="App-intro">
          Search for the perfect restaurant!
        </p>
       
        <div>
        <SearchBar searchYelp={this.searchYelp}/>
        </div>

        <div class="row"> 
          <div class="column left">
          <BusinessList businesses={this.state.businesses}/>
          </div>
          <div class="column right">
          <MapContainer businesses={this.state.businesses}/>
          </div>
        </div>
        
       
      </div>
    );
  }
}


export default (App)