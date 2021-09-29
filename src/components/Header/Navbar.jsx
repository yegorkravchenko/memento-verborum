import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from '../../img/logo.svg';
import { navData } from './navData';
import { FaBars } from 'react-icons/fa';

function Navbar({ toggleSidebar }) {
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
        <FaBars className={styles.menuIcon} onClick={toggleSidebar} />
      </div>
    </header>
  );
}

export default Navbar;
