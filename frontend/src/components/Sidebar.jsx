import { NavLink } from "react-router-dom";

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const HomeIcon = () => (
  <svg {...iconProps}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10v10h14V10" />
  </svg>
);

const UserIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
  </svg>
);

const GiftIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="9" width="18" height="12" rx="1" />
    <path d="M3 9h18v4H3z" />
    <path d="M12 9v12M12 9c-1.5-4-6-4-6-1.5S9 9 12 9zm0 0c1.5-4 6-4 6-1.5S15 9 12 9z" />
  </svg>
);

const UploadIcon = () => (
  <svg {...iconProps}>
    <path d="M12 16V4M7 9l5-5 5 5" />
    <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
  </svg>
);

const SettingsIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const LogoutIcon = () => (
  <svg {...iconProps}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <path d="M16 17l5-5-5-5" />
    <path d="M21 12H9" />
  </svg>
);

const LeafIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-11 11-11 0 7-2 11-4 13a7 7 0 0 1-1 5" />
    <path d="M4 13c4 0 8-2 11-5" />
  </svg>
);

const navItems = [
  { to: "/home", label: "Home", icon: HomeIcon },
  { to: "/Profile", label: "Profile", icon: UserIcon },
  { to: "/Reward", label: "Rewards", icon: GiftIcon },
  { to: "/Upload", label: "Upload", icon: UploadIcon },
  { to: "/Setting", label: "Settings", icon: SettingsIcon },
];

const Sidebar = () => {
  return (
    <div
      className="w-64 h-screen fixed left-0 top-0 flex flex-col"
      style={{ background: "#152A20", color: "#E8ECE7" }}
    >
      <div className="flex items-center gap-2 px-6 pt-6 pb-4">
        <span style={{ color: "#8FD19E" }}>
          <LeafIcon />
        </span>

        <h1
          className="text-xl font-semibold tracking-tight"
          style={{ color: "#FCFBF8" }}
        >
          EcoEarn
        </h1>
      </div>

      <nav className="flex flex-col gap-1 px-4 mt-4">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/home"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive ? "" : "hover:bg-white/5"
              }`
            }
            style={({ isActive }) =>
              isActive
                ? { background: "#1F4D3A", color: "#B7E4C7" }
                : { color: "#C7CFC9" }
            }
          >
            <Icon />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto px-4 pb-4">
        <div
          className="h-px mb-3"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />

        <NavLink
          to="/Logout"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors hover:bg-white/5"
          style={{ color: "#C7CFC9" }}
        >
          <LogoutIcon />
          Log out
        </NavLink>

        <p
          className="text-xs mt-4 px-3"
          style={{ color: "#5C6A61" }}
        >
          © EcoEarn — built by Anup
        </p>
      </div>
    </div>
  );
};

export default Sidebar;