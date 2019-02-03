import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import HeaderNoAuth from "./HeaderNoAuth";
import Footer from "./Footer";


const UserSignUp = ({
  fullName,
  phoneNumber,
  address,
  email,
  password,
  confirmPassword,
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
            <strong>User Register</strong>
          </div>
          <div className="middle-box-body">
            <div><a id="errorMessage">{errorMsg}</a></div>
            <form name="signupForm" method="post">
              <Input
                id="fullName"
                name="fullName"
                placeholder="Enter Your Full Name"
                type="text"
                required="required"
                onChange={onChange}
                value={fullName}
              />
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Your Phone Number"
                type="text"
                required="required"
                onChange={onChange}
                value={phoneNumber}
              />
              <Input
                id="address"
                name="address"
                placeholder="Enter Delivery Address"
                type="text"
                required="required"
                onChange={onChange}
                value={address}
              />
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
              <Input
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Enter Password Again"
                type="password"
                required="required"
                onChange={onChange}
                value={confirmPassword}
              />
              <br />
              <div className="mt-20 spread-in">
                <span>
                  <Link to="/">Login here</Link>
                </span>
                <Button id="btn"
                  onClick={onClick}
                  disabled={disabled}
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>);
  };

export default UserSignUp;
