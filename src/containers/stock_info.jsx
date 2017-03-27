import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buyStock } from './actions/index';

class StockInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: null
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({shares: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.buyStock(this.state.shares);
    this.setState({shares: ''});
  }

  render() {
    return(


      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder="Enter Number of Shares"
          type="number"
          className="form-control"
          value={this.state.shares}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-outline-primary">Buy</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ buyStock }, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
