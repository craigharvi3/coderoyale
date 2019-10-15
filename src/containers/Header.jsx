import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  user: state.user.profile,
  activeNavItem: state.ui.activeNavItem
});

/**
 * Header component
 *
 * @param {object} props
 */
const Header = () => {
  return (
    <header className="header gs-u-pv">
      <div className="gel-wrap">
        <a
          href="/"
          className="header__logo gs-u-display-inline-block gel-double-pica-bold"
        >
          CodeRoyale
        </a>
      </div>
    </header>
  );
};

Header.defaultProps = {
  navItems: null
};

export default connect(mapStateToProps)(Header);
