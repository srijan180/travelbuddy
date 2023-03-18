import React, { useState } from "react";
import UserDashNavbar from "./UserDashNavbar";
import axios from "axios";
import swal from 'sweetalert';

function UserSearchtour() {
  const [search, setSearch] = useState("");
  const [tourlist, setTourList] = useState([]);
  const [status, setStatus] = useState(false);

  function viewTourList() {
    return tourlist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {currentrow.tourid}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {currentrow.type_of_destination}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {currentrow.place}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {currentrow.price}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {currentrow.no_of_days}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {currentrow.starting_date}
          </td>
        </tr>
      );
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .get("http://localhost:5000/user/searchtour/" + search)
      .then((res) => {
        console.log(res.data);
        setTourList(res.data);
        setStatus(true);
      })
      .catch((err) => {
        console.log(err);
        swal("Error!", "No Such Data Found!", "error");

        setStatus(false);
      });

    setSearch("");
  };

  if (status === false) {
    return (
      <>
        <UserDashNavbar />
        <main className="relative isolate ml-80 mt-32">
          <h1 className="font-bold text-center text-3xl">SEARCH TOUR</h1>

          <form
            class="flex items-center ml-80 mr-80 mt-6"
            method="POST"
            onSubmit={handleSubmit}
          >
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
                placeholder="Enter Type of Destination"
                required
                onChange={(e) => {
                  setSearch(e.target.value);
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <span class="sr-only">Enter Type of Destination</span>
            </button>
          </form>
        </main>
      </>
    );
  } else {
    return (
      <div>
        <UserDashNavbar />
        <main className="relative isolate ml-80 mt-32">
          <h1 className="font-bold text-center text-3xl">SEARCH TOUR</h1>

          <form
            class="flex items-center ml-80 mr-80 mt-6"
            method="POST"
            onSubmit={handleSubmit}
          >
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
                placeholder="Enter Type of Destination"
                required
                onChange={(e) => {
                  setSearch(e.target.value);
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <span class="sr-only">Enter Type of Destination</span>
            </button>
          </form>

          <br />

          <div className="overflow-x-auto rounded-lg border border-gray-200 ml-32 mr-40 mt-11">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm ">
              <thead>
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Tour ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Type of Destination
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Place
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    No of Days
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Starting Date
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {viewTourList()}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    );
  }
}

export default UserSearchtour;
