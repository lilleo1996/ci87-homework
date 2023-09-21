import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ThemeContext from "./contexts/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
