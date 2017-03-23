import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.jsx'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className='col-12'>
            <h1 className='text-center'>React Trading</h1>
            <SearchBar />
          </div>
        </div>

      </div>
    );
  }
}
