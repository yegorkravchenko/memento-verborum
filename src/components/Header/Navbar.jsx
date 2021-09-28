import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from '../../img/logo.svg';
import { navData } from './navData';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={['wrapper', styles.headerWrapper].join(' ')}>
        <img src={logo} alt="the logo of momento verborum" />
        <nav className={styles.nav}>
          <ul>
            {navData.map((data) => (
              <li key={data.title}>
                <NavLink
                  exact
                  to={data.path}
                  className={styles.link}
                  activeClassName={styles.selectedLink}
                >
                  {data.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
