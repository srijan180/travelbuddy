import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function Reg() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userid] = useState(
    "UID" + "BID" + Math.floor(Math.random() * (9999 - 1000 + 1))
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`form submitted:`);
    console.log(`firstname: ${firstname}`);
    console.log(`lastname: ${lastname}`);
    console.log(`gender: ${gender}`);
    console.log(`phone: ${phone}`);
    console.log(`email: ${email}`);

    //CREATE JSON AND STORE ALL USER INPUT
    const obj = {
      userid: userid,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      phone: phone,
      email: email,
      password: password,
    };

    //COMMUNICATE WITH BACKEND USING API
    axios.post("http://localhost:5000/user/reg", obj).then((res) => {
      console.log(res.data);
      alert("Registration successful");

      //TO CLEAR DATA
      setFirstname("");
      setLastname("");
      setGender("");
      setPhone("");
      setEmail("");
      setPassword("");
    });
  };

  return (
    <>
      <Navbar />
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
              Create New account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already had an account?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="space-y-3 rounded-md shadow-sm ">
              <div className="flex space-x-3">
                <div>
                  <label className="sr-only">First name</label>
                  <input
                    id="first-name"
                    name="First Name"
                    type="text"
                    autoComplete="email"
                    required
                    className="relative block w-full p-4 mr-32 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                    placeholder="First Name"
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="sr-only">Last Name</label>
                  <input
                    id="last-name"
                    name="last name"
                    type="text"
                    autoComplete=""
                    required
                    className="relative block w-full p-4 mr-28 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="Last Name"
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <div>
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="gender"
                    placeholder="Gender"
                    required
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    className="relative block mr-16 w-full p-1 rounded border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-200 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 cursor-pointer"
                  >
                    <option value="" selected disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="sr-only">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    pattern="[0-9]{10}"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className="relative block w-full p-4 rounded mr-28 border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6 "
                  />
                </div>
              </div>
              <div>
                <label className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full p-4 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  className="relative p-4 block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reg;
