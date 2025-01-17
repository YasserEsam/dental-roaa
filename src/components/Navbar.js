"use client";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // إغلاق القائمة المنسدلة بعد التمرير
  };

  return (
    <nav className="bg-blue-50 dark:bg-gray-800 shadow-lg p-4 flex items-center justify-between">
      {/* الشعار */}
      <div className="text-2xl font-bold text-right text-gray-800 dark:text-white">
        Ghamdan Clinic
      </div>

      {/* القائمة الرئيسية */}
      <div className="text-gray-800 dark:text-white flex items-center ml-auto hidden md:flex">
        <a
          href="#about"
          onClick={() => handleScroll("about")}
          className="hover:text-gray-600 dark:hover:text-gray-400 mr-4"
        >
          معلومات عنا
        </a>
        <a
          href="#services"
          onClick={() => handleScroll("services")}
          className="hover:text-gray-600 dark:hover:text-gray-400 mr-4"
        >
          خدماتنا
        </a>
      </div>

   {/* تبديل الوضع الليلي */}
    <button onClick={toggleDarkMode} className="text-xl ml-4 md:ml-0">
      {isDarkMode ? (
        <FaSun className="text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-200 transition-colors" />
      ) : (
        <FaMoon className="text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-200 transition-colors" />
      )}
    </button>


      {/* القائمة المنسدلة */}
      <button
        className="md:hidden text-gray-800 dark:text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-blue-50 dark:bg-gray-800 text-gray-800 dark:text-white p-4 shadow-lg rounded">
          <a
            href="#about"
            onClick={() => handleScroll("about")}
            className="block hover:text-gray-600 dark:hover:text-gray-400 mb-2"
          >
            معلومات عنا
          </a>
          <a
            href="#services"
            onClick={() => handleScroll("services")}
            className="block hover:text-gray-600 dark:hover:text-gray-400 mb-2"
          >
            خدماتنا
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
