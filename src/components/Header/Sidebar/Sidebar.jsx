import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { navData } from '../navData';
import styles from './Sidebar.module.scss';

function Sidebar({ isOpen, toggleSidebar }) {
  const sidebarWrapperStyles = isOpen
    ? [styles.sidebarWrapper, styles.active].join(' ')
    : styles.sidebarWrapper;

  return (
    <div className={sidebarWrapperStyles}>
      <nav className={styles.sidebar}>
        <ul>
          <li>
            <IoCloseSharp
              className={styles.closeIcon}
              onClick={toggleSidebar}
            />
          </li>
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
  );
}

export default Sidebar;
