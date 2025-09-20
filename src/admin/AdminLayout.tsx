import { NavLink, Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useMemo } from "react";

const ROLE_KEY = "bvp.admin.role"; // 'super' | 'sub'

const AdminLayout = () => {
  const role = useMemo(() => (localStorage.getItem(ROLE_KEY) || "sub").toLowerCase(), []);
  return (
    <div className="min-h-screen w-full grid grid-cols-[220px_1fr] bg-muted/20">
      <aside className="border-r bg-white">
        <div className="h-14 px-4 flex items-center font-semibold">Admin</div>
        <Separator />
        <nav className="p-2 space-y-1">
          <NavLink
            to="/admin/banner"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm ${isActive ? "bg-muted font-medium" : "hover:bg-muted"}`
            }
          >
            Update Banner
          </NavLink>
          <NavLink
            to="/admin/news"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm ${isActive ? "bg-muted font-medium" : "hover:bg-muted"}`
            }
          >
            News Manager
          </NavLink>
          <NavLink
            to="/admin/sub-admins"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm ${isActive ? "bg-muted font-medium" : "hover:bg-muted"}`
            }
          >
            Sub Admins
          </NavLink>
          {role === "super" && (
            <NavLink
              to="/admin/super-email"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm ${isActive ? "bg-muted font-medium" : "hover:bg-muted"}`
              }
            >
              Super Admin Email
            </NavLink>
          )}
        </nav>
      </aside>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;


