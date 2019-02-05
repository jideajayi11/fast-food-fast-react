import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavListComponent = ({
  role, onLogout, menuItems
}) => {
  if(role == 'user') {
    return  (
      <nav
        id="nav-list"
        className={menuItems ? "" : "menu-items"}
      >
        <Link to="view-menu"><div className="first">View Food Items</div></Link>
        <Link to="view-order"><div>View Orders</div></Link>
        <div
          className="last"
          id="logout"
          role="presentation"
          onClick={onLogout}
        >
          Logout
        </div>
      </nav>
    )
  } else if(role == 'admin') {
    return  (
      <nav
        id="nav-list"
        className={menuItems ? "" : "menu-items"}
      >
        <Link to="admin-menu"><div className="first">Manage Food</div></Link>
			  <Link to="admin-order"><div>Manage Orders</div></Link>
        <div
          className="last"
          id="logout"
          role="presentation"
          onClick={onLogout}
        >
          Logout
        </div>
      </nav>
    )
  }
};

NavListComponent.propTypes = {
  role: PropTypes.string.isRequired,
  menuItems: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavListComponent;
