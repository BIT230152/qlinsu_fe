import { FaHome, FaUser, FaTable } from "react-icons/fa";
import { MdInfo } from "react-icons/md";

interface NavItem {
  name: string;
  to: string;
  icon: () => React.ReactNode;
}

export const navItems: NavItem[] = [
  {
    name: "Dashboard",
    to: "/",
    icon: () => <FaHome className="w-5 h-5" />,
  },
  {
    name: "About",
    to: "/about",
    icon: () => <MdInfo className="w-5 h-5" />,
  },
  {
    name: "Profile",
    to: "/profile",
    icon: () => <FaUser className="w-5 h-5" />,
  },
  {
    name: "Datatable",
    to: "/datatable",
    icon: () => <FaTable className="w-5 h-5" />,
  },
];
