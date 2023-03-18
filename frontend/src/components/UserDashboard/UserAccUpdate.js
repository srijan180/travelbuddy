import React from "react";
import UserDashNavbar from "./UserDashNavbar";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

function UserAccUpdate() {
  const [firstname, setFirstname] = useState(
    sessionStorage.getItem("userfirstname")
  );
  const [lastname, setLastname] = useState(
    sessionStorage.getItem("userlastname")
  );
  const [email, setEmail] = useState(sessionStorage.getItem("useremail"));
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`Form submitted:`);
    console.log(`NAME: ${firstname}`);
    console.log(`EMAIL: ${email}`);
    console.log(`PHONE: ${phone}`);
    console.log(`PASSWORD: ${password}`);

    const info = {
      email: email,
      password: password,
      phone: phone,
    };

    axios
      .put("http://localhost:5000/user/profileupdate", info)
      .then((res) => {
        console.log(res.data);
        swal("Success!", "Profile Updated Successfully", "success");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <UserDashNavbar />
      <main className="relative isolate ml-60 mt-28">
        <div>
          <h1 className="font-bold text-center text-3xl">UPDATE PROFILE</h1>
        </div>
        <div className="ml-80 mr-80 mt-8">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm flex flex-col  space-y-5">
              <div>
                <label className="sr-only">First name</label>
                <input
                  id="first-name"
                  name="First Name"
                  type="text"
                  value={firstname}
                  className="relative block w-full p-4 mr-32 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                  disabled
                />
              </div>
              <div>
                <label className="sr-only">Last Name</label>
                <input
                  id="last-name"
                  name="last name"
                  type="text"
                  value={lastname}
                  className="relative block w-full p-4 mr-28 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                  disabled
                />
              </div>
              <div>
                <label className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  required
                  className="relative block w-full p-4 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                  disabled
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="sr-only">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter Phone Number"
                required
                pattern="[0-9]{10}"
                className="relative block w-full p-4 rounded mr-28 border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6 "
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative p-4 block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                placeholder="Enter New Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-5">
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
                Update
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default UserAccUpdate;
