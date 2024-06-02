import { NavLink } from "react-router-dom";

import { Home, MediaImage } from "iconoir-react";

import { cn } from "../lib/utils";

const navbarPages = [
  {
    icon: <Home height={24} />,
    children: "Home",
    to: "/",
  },
  {
    icon: <MediaImage height={24} />,
    children: "Cover Photos",
    to: "/coverphotos",
  },
];

export default function AdminNavbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "flex h-screen min-w-52 flex-col bg-slate-50 shadow-xl",
        className
      )}
    >
      <div className="bg-slate-50 px-8 py-4 text-center text-lg">
        <img src="/logo.png" className="h-10" />
      </div>
      {navbarPages.map((page) => (
        <Link key={page.to} {...page} />
      ))}
    </nav>
  );
}

function Link({
  icon,
  children,
  to,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  to: string;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex flex-row items-center gap-3 bg-transparent px-8 py-4 pe-10 transition-colors hover:bg-slate-200",
          isActive && "bg-slate-200"
        )
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}
