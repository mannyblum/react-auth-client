import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({email, password});
  }

  renderInput(field) {
    return (
      <div>
        <input {...field.input} type={field.type} className="form-control" />
      </div>
    );
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oooops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    // NOTE: This is slightly different from the video because of updates
    // to redux-form
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" component={this.renderInput} type="email" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component={this.renderInput} type="password" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

// reduxForm no longer uses array to keep track of fields, need connect
// to hook in actions
const form = reduxForm({ form: 'signin' })(Signin);
export default connect(mapStateToProps, actions)(form);
