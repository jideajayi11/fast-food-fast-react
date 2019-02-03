import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserSignup from "../presentational/UserSignup";
import { authAction } from "../../actions";


class UserSignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      phoneNumber: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: "",
      disabled: false,
      errorMsg: ""
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleClick = async (event) => {
    event.preventDefault();
    this.setState({ errorMsg: "", disabled: true });
    const {
      fullName,
      phoneNumber,
      address,
      email,
      password,
      confirmPassword,
    } = this.state;
    const Response = await this.props.authAction({
      fullName,
      phoneNumber,
      deliveryAddress: address,
      email,
      password,
      confirmPassword,
    }, {
      role: 'user',
      authType: 'signup'
    });
    Response.payload.authenticated
    ? this.props.history.push('/view-menu')
    : this.setState({
      errorMsg: Response.payload.message
        || 'Check your Internet Connection',
      disabled: false
    });
  }
  render() {
    const {
      fullName,
      phoneNumber,
      address,
      email,
      password,
      confirmPassword,
      disabled,
      errorMsg
    } = this.state;
    return (
      <UserSignup
        errorMsg={errorMsg}
        fullName={fullName}
        phoneNumber={phoneNumber}
        address={address}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        disabled={disabled}
        onChange={(event) => this.handleChange(event)}
        onClick={(event) => this.handleClick(event)}
      />
    );
  }
}

UserSignUpPage.propTypes = {
  authAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  authAction
};

export default connect(null, mapDispatchToProps)(UserSignUpPage);
