import React, { Component } from 'react';
import Home from './home';
import Blog from './blog';
import Gallery from './gallery'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>FoodLakeCity</h1>
      
        <Blog />
        <Gallery />
      </div>
    );
  }
}