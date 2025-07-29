import React, { useState } from "react";
import { NavLink } from "react-router";
import { navItems } from "./item";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/picture/logo.png";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className={`bg-sky-500 text-white h-screen p-4 flex flex-col border-r border-sky-200 transition-all duration-300 ${
        collapsed ? "w-20" : "w-60"
      }`}
    >
      <div className={`flex items-center gap-2 mb-6 transition-all duration-300 ${collapsed ? "justify-center" : ""}`}>
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover border border-sky-200 bg-white" />
        <h1 className={`text-xl font-bold transition-all duration-300 ${collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>QLNSU</h1>
      </div>
      <button
        className="mb-6 p-2 rounded-full bg-white text-sky-500 hover:bg-sky-100 transition self-end"
        onClick={() => setCollapsed((c) => !c)}
        aria-label="Toggle sidebar"
      >
        <FaBars className="w-6 h-6" />
      </button>
      
      <nav className="flex flex-col gap-2 bg-white p-2 rounded-md shadow-md">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md transition-colors font-medium text-base ${
                isActive
                  ? "bg-sky-100 text-black"
                  : "text-black hover:bg-sky-200"
              }`
            }
          >
            <span className="w-6 h-6 flex items-center justify-center">{/* giữ icon luôn to */}
              <item.icon />
            </span>
            <span className={`transition-all duration-300 ${collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
