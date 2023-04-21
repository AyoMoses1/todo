import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Tasks' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <>
    <nav className={styles.navbar}>
      <div className={styles.navlogo}>
        Todos CMS
      </div>
      <ul className={styles.navlinks}>
        {links.map((link) => (
          <React.Fragment key={link.text}>
            <li>
              <NavLink to={link.path} className={styles.link}>{link.text}</NavLink>
            </li>
          </React.Fragment>
        ))}
      </ul>
      <div className={styles.user}>
        <i className="fa-solid fa-user" />
      </div>
    </nav>
  </>
);
export default Navbar;
