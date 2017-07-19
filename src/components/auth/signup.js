import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit({ email, password, passwordConfirm }) {
    this.props.signupUser({ email, password, passwordConfirm });
  }

  renderInput(field) {
    return (
      <div>
        <input {...field.input} type={field.type} className="form-control" />
      </div>
    );
  }

  render() {
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
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <Field name="passwordConfirm" component={this.renderInput} type="password" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>


    );
  }
}

const signupForm = reduxForm({ form: 'signup' })(Signup);
export default connect(null, actions)(signupForm);
