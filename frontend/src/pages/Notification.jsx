import { useState, useRef, useEffect } from "react";
import { Bell, Truck, CalendarClock, CheckCircle2, Check } from "lucide-react";

const TYPE_META = {
  accepted: { icon: Truck, color: "#2F5233", bg: "#E7EFE6" },
  scheduled: { icon: CalendarClock, color: "#9C5A2E", bg: "#F5EAE0" },
  completed: { icon: CheckCircle2, color: "#5B5B54", bg: "#EEEDE8" },
};

const NOTIFICATIONS = [
  {
    id: 1,
    type: "accepted",
    title: "Pickup request accepted",
    message: "A collector has been assigned to your request.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    type: "scheduled",
    title: "Pickup scheduled",
    message: "Your pickup is set for tomorrow, 9:00–11:00 AM.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    type: "completed",
    title: "Pickup completed",
    message: "12 kg of waste was collected from your address.",
    time: "Yesterday",
    read: true,
  },
];

export default function Notification() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(NOTIFICATIONS);
  const rootRef = useRef(null);

  const unreadCount = items.filter((n) => !n.read).length;

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

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div
      ref={rootRef}
      style={{
        position: "relative",
        display: "inline-block",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .notif-item { transition: background-color 120ms ease; }
        .notif-item:hover { background-color: #F7F5F0; }
        .notif-bell:focus-visible, .notif-markread:focus-visible {
          outline: 2px solid #2F5233;
          outline-offset: 2px;
        }
      `}</style>

      <button
        className="notif-bell"
        onClick={() => setOpen((v) => !v)}
        aria-label={
          unreadCount > 0
            ? `Notifications, ${unreadCount} unread`
            : "Notifications"
        }
        aria-expanded={open}
        style={{
          position: "relative",
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid #E3E0D8",
          background: open ? "#F0EEE7" : "#FCFBF8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Bell size={18} color="#3A3A34" strokeWidth={1.8} />
        {unreadCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: -2,
              right: -2,
              minWidth: 16,
              height: 16,
              padding: "0 4px",
              borderRadius: 999,
              background: "#2F5233",
              color: "#FCFBF8",
              fontSize: 10,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid #FCFBF8",
            }}
          >
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: 48,
            right: 0,
            width: 320,
            background: "#FCFBF8",
            border: "1px solid #E3E0D8",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(30,28,20,0.12)",
            overflow: "hidden",
            animation: "dropIn 140ms ease-out",
            zIndex: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 16px 10px",
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 600, color: "#1E1C14" }}>
              Notifications
            </span>
            {unreadCount > 0 && (
              <button
                className="notif-markread"
                onClick={markAllRead}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 12.5,
                  fontWeight: 500,
                  color: "#2F5233",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "2px 4px",
                }}
              >
                <Check size={13} strokeWidth={2} />
                Mark all read
              </button>
            )}
          </div>

          <div style={{ maxHeight: 320, overflowY: "auto" }}>
            {items.length === 0 ? (
              <div
                style={{
                  padding: "32px 16px",
                  textAlign: "center",
                  color: "#8A8A80",
                  fontSize: 13.5,
                }}
              >
                No notifications yet.
              </div>
            ) : (
              items.map((n) => {
                const meta = TYPE_META[n.type];
                const Icon = meta.icon;
                return (
                  <div
                    key={n.id}
                    className="notif-item"
                    role="menuitem"
                    style={{
                      display: "flex",
                      gap: 10,
                      padding: "12px 16px",
                      borderTop: "1px solid #EEECE4",
                      background: n.read ? "transparent" : "#FBF8F1",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: meta.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={15} color={meta.color} strokeWidth={2} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 13.5,
                            fontWeight: 600,
                            color: "#1E1C14",
                          }}
                        >
                          {n.title}
                        </span>
                        {!n.read && (
                          <span
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "#2F5233",
                              flexShrink: 0,
                            }}
                          />
                        )}
                      </div>
                      <p
                        style={{
                          margin: "2px 0 4px",
                          fontSize: 12.5,
                          lineHeight: 1.4,
                          color: "#5B5B54",
                        }}
                      >
                        {n.message}
                      </p>
                      <span style={{ fontSize: 11.5, color: "#9A9A8E" }}>
                        {n.time}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
