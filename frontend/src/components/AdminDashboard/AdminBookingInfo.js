import React from "react";
import AdminDashNavbar from "./AdminDashNavbar";
import axios from "axios";
import { useState, useEffect } from "react";

function AdminBookingInfo() {
  const [bookinglist, setBookingList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/viewallbooking/")
      .then((response) => {
        console.log(response.data);
        setBookingList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function viewBookingList() {
    return bookinglist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {currentrow.bookingid}
          </td>
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
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {currentrow.no_of_people}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {currentrow.userid}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {currentrow.firstname}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {currentrow.lastname}
          </td>
        </tr>
      );
    });
  }
  return (
    <div>
      <AdminDashNavbar />

      <main className="relative isolate ml-60 mt-32">
        <div>
          <h1 className="font-bold text-center text-3xl">ALL TOUR DETAILS</h1>
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200 ml-40 mr-32 mt-11">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm ">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Booking ID
                </th>
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
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  No of People
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  User ID
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  User First Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  User Last Name
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {viewBookingList()}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AdminBookingInfo;
