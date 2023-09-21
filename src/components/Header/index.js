import { useContext } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import ThemeContext from "../../contexts/ThemeContext";
import "./style.css";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const linkClassName = (params) => {
    return `header__link ${params.isActive ? "header__link--active" : ""}`;
  };
  return (
    <div className="header">
      <ul className="header__navigator">
        <li>
          <NavLink className={linkClassName} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/todo">
            Todos
          </NavLink>
        </li>
      </ul>
      <div className="header__theme-btn">
        {theme === "light" ? (
          <button className="header__moon-btn" onClick={() => setTheme("dark")}>
            <BsMoon />
          </button>
        ) : (
          <button className="header__sun-btn" onClick={() => setTheme("light")}>
            <BsSun />
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
