import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Image from "./assets/Man.png"


function UserDashNavbar() {
  const [email, setEmail] = useState(sessionStorage.getItem('useremail'));
  const [firstname, setFirstname] = useState(sessionStorage.getItem('userfirstname'));
  const [lastname, setLastname] = useState(sessionStorage.getItem('userlastname'));

  return (
    <div className="fixed flex h-screen top-0 left-0 w-[100%]">
      <div className="flex-col justify-between border-r  w-1/5 bg-gradient-to-r from-purple-100">
        <div className="px-4 py-6">
          {/* Logo */}
          <span className="grid h-10 w-40 place-content-center rounded-lg  text-xs text-gray-600">
            <h1 className="w-full text-[17px] font-bold m-1 flex">
              TRAVEL
              <div className="text-[#7e22ce]">BUDDY.</div>
            </h1>
          </span>

          <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
            {/* HOME NAVBAR */}
            <Link
              to="/userhome"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-purple-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <span className="text-sm font-medium"> Home </span>
            </Link>

            {/* SEARCH TOUR NAVBAR */}
            <Link to="/usersearchtour"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-purple-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="text-sm font-medium"> Search Tour </span>
            </Link>

            {/* BOOK TOUR NAVBAR */}
            <Link
              to="/userbooktour"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-purple-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>

              <span className="text-sm font-medium"> Book Tour </span>
            </Link>

            {/* VIEW BOOKING NAVBAR */}
            <Link
              to="/userviewbooking"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-purple-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>

              <span className="text-sm font-medium"> View Booking </span>
            </Link>

            {/* CANCEL BOOKING NAVBAR */}
            <Link
              to="/usercancelbooking"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-purple-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="text-sm font-medium"> Cancel Booking </span>
            </Link>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-purple-600 hover:text-white">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span className="text-sm font-medium"> Account </span>
                </div>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
                <Link
                  to="/useraccdetails"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-purple-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>

                  <span className="text-sm font-medium"> Details </span>
                </Link>

                <Link
                  to="/useraccupdate"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-purple-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>

                  <span className="text-sm font-medium"> Update Profile </span>
                </Link>

                <form action="/logout">
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-purple-600 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>

                    <span className="text-sm font-medium "> Logout </span>
                  </button>
                </form>
              </nav>
            </details>
          </nav>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-gray-100 w-[284px] ">
          <a
            href="#"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-100 p-4 hover:bg-gray-50"
          >
            <img src={Image} className="h-10 w-10 rounded-full object-cover"/>

            <div>
              <p className="text-xs">
                <strong className="block font-medium"> {firstname}{" "}{lastname} </strong>

                <span> {email}</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserDashNavbar;
