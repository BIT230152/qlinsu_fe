import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { navItems } from "./item";
import logo from "../../assets/picture/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="w-full px-3 bg-white shadow-sm border-b border-sky-200">
      <div className="container flex flex-col md:flex-row items-center justify-between py-3 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <NavLink to="/" className="flex items-center mb-5 md:mb-0 gap-2">
            <span className="text-xl font-black text-sky-500 select-none">
              QL<span className="text-black">NSU</span>
            </span>
          </NavLink>
          <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded-md transition-colors font-medium text-base ${
                    isActive
                      ? "bg-sky-100 text-black"
                      : "text-black hover:bg-sky-200"
                  }`
                }
              >
                <item.icon />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="items-end flex flex-wrap ml-0 md:ml-8 md:border-l md:pl-8 relative">
          <NavLink
            to="/notifications"
            className="text-3xl mr-5 font-medium text-sky-500 hover:text-black"
          >
            <IoIosNotificationsOutline />
          </NavLink>
          <button
            className="text-3xl font-medium text-sky-500 hover:text-black relative focus:outline-none"
            onClick={() => setOpen((o) => !o)}
            aria-label="User menu"
          >
            <FaUserCircle />
          </button>
          {open && (
            <div
              ref={dropdownRef}
              className="absolute right-0 top-12 mt-2 w-40 bg-white rounded-xl shadow-lg border border-sky-100 z-50 animate-fade-in"
            >
              <NavLink
                to="/profile"
                className="block px-4 py-3 text-black hover:bg-sky-50 rounded-t-xl transition"
                onClick={() => setOpen(false)}
              >
                Hồ sơ cá nhân
              </NavLink>
              <NavLink
                to="/settings"
                className="block px-4 py-3 text-black hover:bg-sky-50 rounded-b-xl transition"
                onClick={() => setOpen(false)}
              >
                Cài đặt
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
