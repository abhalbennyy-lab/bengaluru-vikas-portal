import { Navigate } from "react-router-dom";

const ROLE_KEY = "bvp.admin.role"; // 'super' | 'sub'

const SuperAdminEmail = () => {
  const role = (localStorage.getItem(ROLE_KEY) || "sub").toLowerCase();
  if (role !== "super") {
    return <Navigate to="/admin/banner" replace />;
  }
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <div className="mb-4">
        <div className="text-2xl font-semibold">Super Admin Email</div>
        <div className="text-sm text-muted-foreground">This page is visible only to Super Admins.</div>
      </div>
      <div className="text-sm text-muted-foreground">Backend integration pending.</div>
    </div>
  );
};

export default SuperAdminEmail;


