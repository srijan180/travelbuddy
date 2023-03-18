import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Admin() {
  const [adminid, setAdminId] = useState("");
  const [adminpass, setAdminPass] = useState("");

  const navigate = useNavigate();

  const executeSubmit = (evt) => {
    evt.preventDefault();

    console.log(`ADMIN USER ID: ${adminid}`);
    console.log(`PASS: ${adminpass}`);

    if (adminid === "admin" && adminpass === "pass") {
      console.log("VALID");
      sessionStorage.setItem("utype", "ADMIN");

      navigate("/adminhome");
    } else {
      alert("INVALID UID OR PASSWORD");
      setAdminId("");
      setAdminPass("");
    }
  };

  return (
    <div>
      <>
        <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
          <div className="w-full max-w-md space-y-8">
            <div>
              <div className=" ml-28">
                <h1 className="w-full text-3xl font-bold m-1 flex">
                  TRAVEL
                  <div className="text-[#7e22ce]">BUDDY.</div>
                </h1>
              </div>
              <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
                Admin Panel Login
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              method="POST"
              onSubmit={executeSubmit}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Usename
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="relative block w-full p-4 rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                    placeholder="Username"
                    onChange={(e) => setAdminId(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative p-4 block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                    placeholder="Password"
                    onChange={(e) => setAdminPass(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default Admin;
