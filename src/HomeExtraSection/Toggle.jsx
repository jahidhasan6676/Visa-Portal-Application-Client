import { useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
const Toggle = () => {
  // State to track the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme
  const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle("dark");
  };

  return (
    <div className="text-center pt-3">
        <button
                onClick={toggleTheme}
                className="text-3xl"
            >
                {isDarkMode ? <MdDarkMode /> :<MdOutlineDarkMode /> }
            </button>
    </div>
  );
};

export default Toggle;
