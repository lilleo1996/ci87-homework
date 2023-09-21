import { useContext } from "react";

import ThemeContext from "../../contexts/ThemeContext";
import "./style.css";

const Home = () => {
  const themeContext = useContext(ThemeContext);
  const homePageClassName = `home ${
    themeContext.theme === "light" ? "home--light" : "home--dark"
  }`;
  return (
    <div className={homePageClassName}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
