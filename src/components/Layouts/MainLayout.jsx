import { useContext } from "react";
import { NavLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import Icon from "../Elements/Icon";
import { ThemeContext } from "../../context/themeContext";

function MainLayout({ children }) {
  const { theme, setTheme } = useContext(ThemeContext);

  const themes = [
    { name: "theme-green" },
    { name: "theme-blue" },
    { name: "theme-purple" },
    { name: "theme-pink" },
    { name: "theme-brown" },
  ];

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  return (
    <div className={`flex min-h-screen ${theme.name}`}>
      {/* ================= SIDEBAR ================= */}
      <aside className="bg-[var(--default-black)] text-[var(--bg-soft-2)] w-28 sm:w-64 px-6 py-10 flex flex-col justify-between">
        
        {/* ===== TOP ===== */}
        <div>
          <div className="mb-10">
            <Logo variant="secondary" />
          </div>

          <nav className="space-y-2">
            {menu.map(item => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-md transition-all
                  ${
                    isActive
                      ? "bg-primary text-white font-semibold"
                      : "hover:bg-soft-3 hover:text-white"
                  }`
                }
              >
                <div className="mx-auto sm:mx-0">{item.icon}</div>
                <span className="hidden sm:block">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="space-y-6">

          {/* === THEME SWITCHER === */}
          <div>
            <p className="mb-2 text-sm">Themes</p>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {themes.map(t => (
                <button
                  key={t.name}
                  onClick={() => setTheme(t)}
                  className={`w-6 h-6 rounded cursor-pointer ${t.name} bg-primary`}
                  title={t.name}
                />
              ))}
            </div>
          </div>

          {/* === LOGOUT === */}
          <button className="flex items-center gap-3 w-full bg-soft-3 text-white px-4 py-3 rounded-md hover:bg-primary transition">
            <Icon.Logout />
            <span className="hidden sm:block">Logout</span>
          </button>

          <div className="border-t border-[var(--bg-soft-3)] pt-4 flex items-center gap-3">
            <div>Avatar</div>
            <div className="hidden sm:block text-sm">
              <div className="font-semibold">Username</div>
              <div className="text-gray-03">View Profile</div>
            </div>
            <div className="ml-auto hidden sm:block">
              <Icon.Detail size={14} />
            </div>
          </div>

        </div>
      </aside>

      {/* ================= CONTENT ================= */}
      <div className="flex-1 bg-main flex flex-col">
        <header className="border-b border-[var(--gray-05)] px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Username</h1>
            <p className="text-gray-03 flex items-center gap-1">
              <Icon.ChevronRight size={18} />
              May 19, 2023
            </p>
          </div>

          <div className="flex items-center gap-6">
            <NotificationsIcon className="text-primary scale-110" />
            <Input backgroundColor="bg-white" />
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
