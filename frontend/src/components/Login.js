import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import swal from "sweetalert";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const executeSubmit = (evt) => {
    evt.preventDefault();

    console.log(`email: ${email}`);
    console.log(`password: ${password}`);

    const loginobj = {
      loginemail: email,
      loginpassword: password,
    };

    // COMMUNICATE WITH BACKEND USING REST API
    axios
      .post("http://localhost:5000/user/login", loginobj)
      .then((response1) => {
        console.log(response1.data);
        sessionStorage.setItem("utype", "USER");
        sessionStorage.setItem("userid", response1.data[0].userid);
        sessionStorage.setItem("userfirstname", response1.data[0].firstname);
        sessionStorage.setItem("useremail", response1.data[0].email);
        sessionStorage.setItem("userlastname", response1.data[0].lastname);
        sessionStorage.setItem("usergender", response1.data[0].gender);
        sessionStorage.setItem("userphone", response1.data[0].phone);
        sessionStorage.setItem("userpassword", response1.data[0].password);

        navigate("/userhome");
      })
      .catch((err) => {
        swal("Error!", "Invalid Email or Password!", "error");
      });

    setemail("");
    setpassword("");
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
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/reg"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create a new account
              </Link>
            </p>
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
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full p-4 rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                  onChange={(e) => setemail(e.target.value)}
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
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
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
  );
}

export default Login;
