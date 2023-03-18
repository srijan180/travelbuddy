import React from "react";
import UserDashNavbar from "./UserDashNavbar";
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

function UserBooktour() {
  const [bookingid, setBookingid] = useState(
    "BID" + Math.floor(Math.random() * (9999 - 1000 + 1))
  );
  const [slidervalue, setSliderValue] = useState(0);
  const [tourid, setTourid] = useState("");
  const [place, setplace] = useState("");
  const [type_of_destination, setTod] = useState("");
  const [starting_date, setStartingdate] = useState("");
  const [price, setPrice] = useState("");
  const [no_of_days, setNod] = useState("");
  const [setNoofpeople] = useState("");
  const [userid] = useState(sessionStorage.getItem("userid"));
  const [firstname] = useState(sessionStorage.getItem("userfirstname"));
  const [lastname] = useState(sessionStorage.getItem("userlastname"));

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  //FETCHING DATA FROM TOUR TABLE
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:5000/admin/viewalltour/" + tourid)
      .then((res) => {
        console.log(res.data[0]);
        setplace(res.data[0].place);
        setTod(res.data[0].type_of_destination);
        setStartingdate(res.data[0].starting_date);
        setPrice(res.data[0].price);
        setNod(res.data[0].no_of_days);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit1 = (evt) => {
    evt.preventDefault();
    console.log(`Bookings Added :`);
    console.log(`Bookingid: ${bookingid}`);
    console.log(`tourid: ${tourid}`);
    console.log(`type_of_destination: ${type_of_destination}`);
    console.log(`place: ${place}`);
    console.log(`price: ${price}`);
    console.log(`no_of_days: ${no_of_days}`);
    console.log(`starting_date: ${starting_date}`);
    console.log(`no_of_people: ${slidervalue}`);

    //CREATE JSON AND STORE ALL USER INPUT
    const obj = {
      bookingid: bookingid,
      tourid: tourid,
      type_of_destination: type_of_destination,
      place: place,
      price: price,
      no_of_days: no_of_days,
      starting_date: starting_date,
      no_of_people: slidervalue,
      userid: userid,
      firstname: firstname,
      lastname: lastname,
    };

    //COMMUNICATE WITH BACKEND USING API
    axios.post("http://localhost:5000/admin/booking", obj).then((res) => {
      console.log(res.data);
      swal("Success!","Tour Booked Successfully!","success");

      //TO CLEAR DATA
      setBookingid("");
      setTourid("");
      setTod("");
      setplace("");
      setPrice("");
      setNod("");
      setStartingdate("");
      setNoofpeople("");
    });
  };

  return (
    <div>
      <UserDashNavbar />

      <div className="w-4/5 ml-64 relative isolate">
        <div className="flex justify-center mt-3">
          <h1 className="font-bold text-2xl text-center mb-4  leading-none tracking-tight text-gray-900">
            BOOK A TOUR
          </h1>
        </div>

        <div className=" ml-80 mr-80">
          <div>
            <label
              or="booking_id"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Booking ID
            </label>
            <input
              id="bookingid"
              name="bookingid"
              type="text"
              value={bookingid}
              disabled
              required
              className="relative block w-full p-4 mr-32 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
              onChange={(e) => {
                setBookingid(e.target.value);
              }}
            />
          </div>
          <form
            className="mt-4 space-y-3"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="flex space-x-5">
              <div>
                <label
                  htmlFor="tour_id"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Tour ID
                </label>
                <input
                  id="tourid"
                  name="tourid"
                  type="text"
                  autoComplete=""
                  required
                  className="relative block w-full p-4 mr-36 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setTourid(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded border border-purple-600 px-4 py-[5%] mt-7  text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500"
                >
                  Fetch Tour Details
                </button>
              </div>
            </div>
          </form>
          <div className="space-y-5 mt-5">
            <div>
              <label
                htmlFor="Tour_place"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Tour Place
              </label>
              <input
                id="tourplace"
                name="tourplace"
                type="text"
                disabled
                value={place}
                className="relative block w-full p-4 mr-20 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 cursor-not-allowed"
              />
            </div>
            <div>
              <label
                htmlFor="type_of_destination"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Type of Destination
              </label>
              <input
                id="type_of_destination"
                name="type_of_destination"
                type="text"
                disabled
                value={type_of_destination}
                className="relative block w-full p-4 mr-20 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 cursor-not-allowed"
              />
            </div>
            <div className="flex space-x-3">
              <div>
                <label
                  htmlFor="booking_date"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Starting Date of Journey
                </label>
                <input
                  type="date"
                  id="bookingdate"
                  name="bookingdate"
                  disabled
                  value={starting_date}
                  className="relative block w-full p-4 rounded mr-20  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6 cursor-not-allowed"
                />
              </div>
              <div>
                <label
                  htmlFor="no_of_days"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  No of Days
                </label>
                <input
                  type="text"
                  id="noofdays"
                  name="noofdays"
                  disabled
                  value={no_of_days}
                  className="relative block w-full p-5 rounded mr-20  border-0 py-[2.5%] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6 cursor-not-allowed"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="tour_price"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Price
              </label>
              <div className="mt-2 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm ">
                  ₹
                </span>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="relative block w-full p-1  rounded  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6 cursor-not-allowed"
                  disabled
                  value={price}
                />
              </div>
            </div>
            <form method="POST" onSubmit={handleSubmit1}>
              <div>
                <label
                  htmlFor="no_of_people"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  No of people
                </label>
                <input
                  id="noofpeople"
                  type="range"
                  min="0"
                  max="10"
                  value={slidervalue}
                  onInput={handleSliderChange}
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className=" ml- text-gray-700">{slidervalue}</span>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-block rounded border border-purple-600 px-5 py-2 text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBooktour;
