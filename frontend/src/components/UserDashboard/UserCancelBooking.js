import React from "react";
import { useState } from "react";
import UserDashNavbar from "./UserDashNavbar";
import axios from "axios";
import swal from 'sweetalert';

function UserCancelBooking() {
  const [bookingid, setBookingid] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .delete("http://localhost:5000/user/delbooking/" + bookingid)
      .then((res) => {
        console.log(res.data);
        swal("Success!","Booking Cancel Successfully","success");
      })
      .catch((err) => {
        console.log(err);
        swal("Error!","Invalid Booking ID","error");
      });

    setBookingid("");
  };

  return (
    <div>
      <UserDashNavbar />

      <main className="relative isolate ml-80 mt-48">
        <h1 className="font-bold text-center text-3xl">CANCEL YOUR BOOKING</h1>

        <form class="flex items-center ml-80 mr-80 mt-6" method="POST" onSubmit={handleSubmit}>
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search_tour_ID"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5  "
              placeholder="Enter Booking ID"
              required
              onChange={(e) => {
                setBookingid(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-purple-700 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span class="sr-only">Enter Booking ID</span>
          </button>
        </form>
      </main>
    </div>
  );
}

export default UserCancelBooking;
