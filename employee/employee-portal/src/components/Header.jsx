import { Bell, Grip, Moon, Plus, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoLight from "../assets/logo-light.png";
import logo from "../assets/logo.png";

const link = [
  { name: "DASHBOARD", active: true },
  { name: "PORTFOLIO", active: false },
  { name: "RESERVATIONS", active: false },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="z-20 relative flex items-center justify-between w-full border-b border-border-color py-3 px-3 bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors">
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setMenuOpen(true)}
        >
          <Grip />
        </button>

        {/* Logo */}
        <img
          src={!darkMode ? logo : logoLight}
          alt="logo"
          className="w-28 h-auto object-contain"
        />

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 pl-10 items-center">
          {link.map((item, i) => (
            <li
              key={i}
              className={`text-sm font-medium cursor-pointer transition-colors ${
                item.active
                  ? "text-primary-color dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary-color dark:hover:text-blue-400"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        <button className="bg-primary-color/80 hover:bg-primary-color text-white rounded-full p-2 transition-colors">
          <Plus className="w-5 h-5" />
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          )}
        </button>

        <button className="bg-primary-color/70 hover:bg-primary-color text-white rounded-full p-2 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-40 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <img
                src={!darkMode ? logo : logoLight}
                alt="logo"
                className="w-24 h-auto"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            <ul className="flex flex-col gap-4">
              {link.map((item, i) => (
                <li
                  key={i}
                  className={`text-sm font-medium cursor-pointer transition-colors ${
                    item.active
                      ? "text-primary-color dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-color dark:hover:text-blue-400"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
