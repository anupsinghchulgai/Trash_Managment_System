import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const iconProps = (size, color, strokeWidth) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

const BellIcon = ({ size = 16, color = "currentColor", strokeWidth = 1.8 }) => (
  <svg {...iconProps(size, color, strokeWidth)}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const UserIcon = ({ size = 16, color = "currentColor", strokeWidth = 1.8 }) => (
  <svg {...iconProps(size, color, strokeWidth)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
  </svg>
);

const ChevronDown = ({ size = 14, color = "currentColor", strokeWidth = 2 }) => (
  <svg {...iconProps(size, color, strokeWidth)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ProfileMenu = ({ name = "Alex Rivera", email = "alex@example.com" }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      ref={rootRef}
      style={{
        position: "relative",
        display: "inline-block",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @keyframes menuDropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pm-trigger { transition: background-color 120ms ease; }
        .pm-trigger:hover { background-color: #F0EEE7; }
        .pm-item { transition: background-color 120ms ease; text-decoration: none; }
        .pm-item:hover { background-color: #F7F5F0; }
        .pm-trigger:focus-visible, .pm-item:focus-visible {
          outline: 2px solid #2F5233;
          outline-offset: -2px;
        }
      `}</style>

      <button
        className="pm-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "4px 10px 4px 4px",
          border: "1px solid #E3E0D8",
          borderRadius: 999,
          background: "#FCFBF8",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "#E7EFE6",
            color: "#2F5233",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <ChevronDown
          size={14}
          color="#8A8A80"
          strokeWidth={2}
        />
      </button>

      {open && (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: 44,
            right: 0,
            width: 220,
            background: "#FCFBF8",
            border: "1px solid #E3E0D8",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(30,28,20,0.12)",
            overflow: "hidden",
            animation: "menuDropIn 140ms ease-out",
            zIndex: 20,
          }}
        >
          <div style={{ padding: "12px 14px", borderBottom: "1px solid #EEECE4" }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: "#1E1C14" }}>
              {name}
            </div>
            <div style={{ fontSize: 12, color: "#8A8A80", marginTop: 1 }}>
              {email}
            </div>
          </div>

          <div style={{ padding: "6px" }}>
            <Link
              to="/ProfilePhoto"
              className="pm-item"
              role="menuitem"
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 10px",
                borderRadius: 8,
                fontSize: 13.5,
                color: "#1E1C14",
              }}
            >
              <UserIcon size={16} color="#5B5B54" />
              Profile
            </Link>

            <Link
              to="/Notification"
              className="pm-item"
              role="menuitem"
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 10px",
                borderRadius: 8,
                fontSize: 13.5,
                color: "#1E1C14",
              }}
            >
              <BellIcon size={16} color="#5B5B54" />
              Notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
