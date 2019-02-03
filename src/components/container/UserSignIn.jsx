import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserSignIn from "../presentational/UserSignIn";
import { authAction } from "../../actions";


class UserSignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    const { email, password } = this.state;
    const Response = await this.props.authAction({
      email,
      password,
    }, {
      role: 'user',
      authType: 'signin'
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
      email,
      password,
      disabled,
      errorMsg
    } = this.state;
    return (
      <UserSignIn
        errorMsg={errorMsg}
        email={email}
        password={password}
        disabled={disabled}
        onChange={(event) => this.handleChange(event)}
        onClick={(event) => this.handleClick(event)}
      />
    );
  }
}

UserSignInPage.propTypes = {
  authAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  authAction
};

export default connect(null, mapDispatchToProps)(UserSignInPage);
