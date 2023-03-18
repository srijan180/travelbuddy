import React from "react";
import AdminDashNavbar from "./AdminDashNavbar";
import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";

function AdminDeletetourManual() {
  const [tourlist, setTourList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/viewalltour")
      .then((response) => {
        console.log(response.data);
        setTourList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          <td>
            <button
              onClick={() => removeRow(index)}
              className="inline-block rounded bg-purple-500 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  function removeRow(index) {
    var temptourlist = [...tourlist]; // make a new copy of array instead of mutating the same array directly.
    let removerow = temptourlist.splice(index, 1);
    console.log(removerow[0].tourid);

    axios
      .delete("http://localhost:5000/admin/deltour/" + removerow[0].tourid)
      .then((res) => {
        console.log(res.data);
        swal("Success!", "Tour Successfully Deleted!", "success");
        setTourList(temptourlist);
      })
      .catch((err) => {
        console.log(err);
        swal("Error!", "Problem!", "error");
      });
  }

  return (
    <div>
      <AdminDashNavbar />

      <main className="relative isolate ml-60 mt-32">
        <h1 className="font-bold text-center text-3xl">DELETE TOUR</h1>

        <div className="overflow-x-auto rounded-lg border border-gray-200 ml-40 mr-32 mt-11">
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

            <tbody className="divide-y divide-gray-200">{viewTourList()}</tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AdminDeletetourManual;
