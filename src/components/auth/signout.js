import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    this.props.SignoutUser();
  }

  render() {
    return (
      <div>
        Sorry to see you got ...
      </div>
    );
  }
}

export default connect(null, actions)(Signout);
