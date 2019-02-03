import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import HeaderNoAuth from "./HeaderNoAuth";
import Footer from "./Footer";


const UserSignIn = ({
  email,
  password,
  onChange,
  onClick,
  disabled,
  errorMsg
}) => {
    return (<div>
      <HeaderNoAuth
        btnLink="/admin-login"
        btnText="Admin Account"
        classNames="big"
      />
      <div className="container">
        <div className="middle-box">
          <div className="middle-box-head">
            <strong>User Login</strong>
          </div>
          <div className="middle-box-body">
            <div><a id="errorMessage">{errorMsg}</a></div>
            <form name="signinForm" method="post">
              <Input
                id="email"
                name="email"
                placeholder="Enter Email Address"
                type="text"
                required="required"
                onChange={onChange}
                value={email}
              />
              <Input
                id="password"
                name="password"
                placeholder="Enter Password"
                type="password"
                required="required"
                onChange={onChange}
                value={password}
              />
              <br />
              <div className="mt-20 spread-in">
                <span>
                  <Link to="/user-register">Register here</Link>
                </span>
                <Button id="btn"
                  onClick={onClick}
                  disabled={disabled}
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>);
  };



export default UserSignIn;
