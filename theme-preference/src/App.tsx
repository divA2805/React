import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="theme-card">
        <h1>Theme Preference App</h1>
        <p className="current-theme">
          Current Theme: <strong>{theme === "light" ? "Light" : "Dark"}</strong>
        </p>

        <div className="buttons">
          <button
            className={theme === "light" ? "active" : ""}
            onClick={() => handleThemeChange("light")}
          >
            Light
          </button>

          <button
            className={theme === "dark" ? "active" : ""}
            onClick={() => handleThemeChange("dark")}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;