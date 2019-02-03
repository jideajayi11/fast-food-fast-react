import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../images/delivery-icon.png';

const Header = ({btnLink, btnText, classNames}) => (
  <header className={classNames} id="headerAuth">
    <div className="container">
      <div className="spread-in">
        <div id="menu-icon">
          <Link to={btnLink}><button className="menu">
            {btnText}
          </button></Link>
        </div>
      </div>
      <div className="logo-title text-center"><img src={logo} className="app-logo" />Fast-Food-Fast</div>
      <div className="text-center">This is a food delivery service application for a restaurant.</div>
    </div>
  </header>
);

Header.propTypes = {
  btnLink: PropTypes.string,
  btnText: PropTypes.string,
  classNames: PropTypes.string,
}

Header.defaultProps = {
  btnLink: 'admin-login',
  btnText: 'Admin Account',
  classNames: 'big',
}

export default Header;
