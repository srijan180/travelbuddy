import React from "react";
import AdminDashNavbar from "./AdminDashNavbar";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

function AdminDeletetour() {
  const [tourid, setTourid] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log(`Form submitted:`);
    //console.log(`EMAIL ID: ${eemail}`);

    axios
      .delete("http://localhost:5000/admin/deltour/" + tourid)
      .then((res) => {
        console.log(res.data);
        swal("Success!","Tour Successfully Deleted","success");
      })
      .catch((err) => {
        console.log(err);
        swal("Error!","Invalid Tour ID","error");
      });

    setTourid("");
  };

  return (
    <div>
      <AdminDashNavbar />

      <main className="relative isolate ml-80 mt-48">
        <h1 className="font-bold text-center text-3xl">DELETE TOUR</h1>

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
              placeholder="Enter Tour ID"
              required
              onChange={(e) => {
                setTourid(e.target.value);
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>

            <span class="sr-only">Enter Tour ID</span>
          </button>
        </form>
      </main>
    </div>
  );
}

export default AdminDeletetour;
