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
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

// reduxForm no longer uses array to keep track of fields, need connect
// to hook in actions
const form = reduxForm({ form: 'signin' })(Signin);
export default connect(null, actions)(form);
