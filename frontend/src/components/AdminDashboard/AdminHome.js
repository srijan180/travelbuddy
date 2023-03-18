import React from "react";
import AdminDashNavbar from "./AdminDashNavbar";


function AdminHome() {
  return (
    <div>
      <AdminDashNavbar />

      <main className="relative isolate ml-80 mt-60">
        <h1 className="mt-6 font-bold text-6xl antialiased text-center tracking-wide">
          Welcome, Admin
        </h1>
      </main>
    </div>
  );
}

export default AdminHome;
