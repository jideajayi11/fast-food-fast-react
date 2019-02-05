import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import jwt from "jsonwebtoken";
import Hamburger from '../presentational/Hamburger';
import NavList from '../presentational/NavList';
import logo from '../../images/delivery-icon.png';
import { authCreator } from '../../actions';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      menuItems: false,
    };
  }

  componentWillMount() {
    const { role, authCreator } = this.props;
    const decoded = jwt.decode(localStorage.getItem('fastFoodToken'));
    if(decoded) {
      authCreator({
        ...decoded,
        authenticated: true,
        role,
      });
    } else {
      window.location = '/';
    }
  }

  handleClick = () => {
    this.state.menuItems
    ? this.setState({
      menuItems: false
    })
    : this.setState({
      menuItems: true
    });
  }

  handleBlur = (event) => {
  }

  handleLogout = () => {
    const { role, history, authCreator } = this.props;
    localStorage.removeItem('fastFoodToken');
    localStorage.removeItem('role');
    authCreator({
      authenticated: false,
      role
    });
    role === 'admin'
    ? history.push('/admin-login')
    : history.push('/')
  }

  render() {
    const { role, pageTitle } = this.props;
    const { disabled, menuItems } = this.state;
    return (
      <header className="" id="headerAuth">
        <div className="container">
          <div className="spread-in">
            <div className="logo-title text-center">
              <img src={logo} className="app-logo" />
              Fast-Food-Fast
            </div>
            <div id="menu-icon">
              <Hamburger
                onClick={() => this.handleClick()}
                disabled={disabled}
                onBlur={(event) => this.handleBlur(event)}
              />
            </div>
          </div>
        </div>
        <NavList
          role={role}
          onLogout={() => this.handleLogout()}
          menuItems={menuItems}
        />
        <div className="subHeader">
          <div className="container">
            <div className="spread-in">
              <div className="pageTitle">{`${pageTitle}:`}</div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  role: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  authCreator: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  authCreator
};

export default connect(null, mapDispatchToProps)(Header);
