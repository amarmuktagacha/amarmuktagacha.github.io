import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", icon: "🏠", label: "হোম", end: true },
  { to: "/khobor", icon: "📰", label: "খবর" },
  { to: "/hotline", icon: "☎️", label: "হটলাইন" },
  { to: "/seba", icon: "🏥", label: "সেবা" },
  { to: "/itihash", icon: "🏛️", label: "ইতিহাস" },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-plaster-texture flex flex-col">
      <header className="sticky top-0 z-20 bg-brick-deep border-b-4 border-brass">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-2.5">
          <span className="text-2xl leading-none">🏛️</span>
          <div>
            <p className="font-display text-xl text-brass leading-tight">আমার মুক্তাগাছা</p>
            <p className="text-paper/60 text-[11px] leading-tight">মুক্তাগাছা কমিউনিটি পোর্টাল</p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-24">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-brick-deep border-t-2 border-brass/60">
        <div className="max-w-md mx-auto grid grid-cols-5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-medium transition-colors ${
                  isActive ? "text-brass" : "text-paper/55"
                }`
              }
            >
              <span className="text-lg leading-none">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
