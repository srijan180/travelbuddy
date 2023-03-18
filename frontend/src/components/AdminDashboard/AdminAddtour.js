import React, { useState } from "react";
import AdminDashNavbar from "./AdminDashNavbar";
import axios from "axios";
import swal from "sweetalert";

function AdminAddtour() {
  const [tourid, setTourid] = useState(
    "TID" + Math.floor(Math.random() * (9999 - 1000 + 1))
  );
  const [type_of_destination, setType_of_destination] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [noofdays, setNoofdays] = useState("");
  const [startingdate, setStartingdate] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Tours Addes :`);
    console.log(`tourid: ${tourid}`);
    console.log(`type_of_destination: ${type_of_destination}`);
    console.log(`place: ${place}`);
    console.log(`price: ${price}`);
    console.log(`no_of_days: ${noofdays}`);
    console.log(`starting_date: ${startingdate}`);

    //CREATE JSON AND STORE ALL USER INPUT
    const obj = {
      tourid: tourid,
      type_of_destination: type_of_destination,
      place: place,
      price: price,
      no_of_days: noofdays,
      starting_date: startingdate,
    };

    //COMMUNICATE WITH BACKEND USING API
    axios.post("http://localhost:5000/admin/addtour", obj).then((res) => {
      console.log(res.data);
      swal("Success!", "Tour added successfully!", "success");

      //TO CLEAR DATA
      setTourid("");
      setType_of_destination("");
      setPlace("");
      setPrice("");
      setNoofdays("");
      setStartingdate("");
    });
  };

  return (
    <div>
      <AdminDashNavbar />

      <main className="relative isolate ml-80 mt-16">
        <h1 className="font-bold text-center text-3xl">ADD TOUR</h1>

        <div className=" ml-96 mr-96">
          <form
            className="mt-8 space-y-6"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="booking_id" className="sr-only">
                Tour ID
              </label>
              <input
                id="tourid"
                readOnly
                value={tourid}
                name="tourid"
                type="text"
                className="relative block w-full p-4  rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  setTourid(e.target.value);
                }}
              />
            </div>
            <div>
              <select
                id="typeofdestinations"
                name="typeofdestinations"
                autoComplete="typeofdestinations"
                required
                className="relative block mr-16 w-full p-1 rounded border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-200 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 cursor-pointer"
                onChange={(e) => {
                  setType_of_destination(e.target.value);
                }}
              >
                <option value="" defaultValue>
                  Type of Destination
                </option>
                <option value="Historical">Historical</option>
                <option value="Nature & wildlife">Nature & Wildlife</option>
                <option value="Urban">Urban</option>
                <option value="Cultural & heritage">Cultural & Heritage</option>
                <option value="Adventure">Adventure </option>
              </select>
              <div className="space-y-6">
                <label htmlFor="place" className="sr-only">
                  Place
                </label>
                <input
                  id="place"
                  name="place"
                  type="text"
                  required
                  className="relative block mr-16 w-full p-4 rounded border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 cursor-pointer"
                  placeholder="Place"
                  onChange={(e) => {
                    setPlace(e.target.value);
                  }}
                />
              </div>
              <div>
                <div className=" mt-6 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="relative block w-full p-1  rounded  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6 "
                    placeholder="Price"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>
                <div className="space-y-6">
                  <label htmlFor="no_of_days" className="sr-only">
                    No of Days
                  </label>
                  <input
                    id="no_of_days"
                    name="noofdays"
                    type="number"
                    required
                    className="relative block mr-16 w-full p-4 rounded border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 cursor-pointer"
                    placeholder="No of Days"
                    onChange={(e) => {
                      setNoofdays(e.target.value);
                    }}
                  />
                </div>
                <div className="space-y-6">
                  <label htmlFor="starting_date" className="sr-only">
                    Starting date of journey
                  </label>
                  <input
                    id="startingdate"
                    name="startingdate"
                    type="date"
                    required
                    className="relative block mr-16 w-full p-4 rounded border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 cursor-pointer"
                    placeholder="Starting Date of Journey"
                    onChange={(e) => {
                      setStartingdate(e.target.value);
                    }}
                  />
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="inline-block rounded border border-purple-600 px-5 py-2 text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500"
                  >
                    Add tour
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AdminAddtour;
