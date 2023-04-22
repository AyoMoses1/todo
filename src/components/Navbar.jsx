/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";

const links = [
  { path: "/", text: "Tasks" },
  { path: "categories", text: "Categories" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwtauth");
    navigate("/login");
  };

  const user = localStorage.getItem("todo-user");

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navlogo}>Todos CMS</div>
        <ul className={styles.navlinks}>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              <li>
                <NavLink to={link.path} className={styles.link}>
                  {link.text}
                </NavLink>
              </li>
            </React.Fragment>
          ))}
        </ul>
        <div className={styles.user}>
          Welcome {user}
          <Button
            variant="contained"
            href="#contained-buttons"
            onClick={handleLogout}
            sx={{marginLeft:'10px'}}
          >
            Logout
          </Button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
