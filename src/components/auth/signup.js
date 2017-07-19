import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit({ email, password, passwordConfirm }) {
    this.props.signupUser({ email, password, passwordConfirm });
  }

  renderInput(field) {
    const { type, input, meta: { error, touched } } = field;
    return (
      <div>
        <input {...input} type={type} className="form-control" />
        { touched && error && <div className="error">{error}</div> }
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      //<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <form onSubmit={handleSubmit}>
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

function validate(formProps) {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const signupForm = reduxForm({ form: 'signup', validate })(Signup);
export default connect(mapStateToProps, actions)(signupForm);
