import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MAIN COMPONENTS
import Home from "./components/Home";
import Login from "./components/Login";
import Reg from "./components/Reg";
import Logout from "./components/Logout";
import About from "./components/About";

//USER DASHBOARD COMPONENTS
import UserHome from "./components/UserDashboard/UserHome";
import UserBooktour from "./components/UserDashboard/UserBooktour";
import UserCancelBooking from "./components/UserDashboard/UserCancelBooking";
import UserViewBooking from "./components/UserDashboard/UserViewBooking";
import UserSearchtour from "./components/UserDashboard/UserSearchtour";
import UserAccDetails from "./components/UserDashboard/UserAccDetails";
import UserAccUpdate from "./components/UserDashboard/UserAccUpdate";

//ADMIN DASHBOARD COMPONENTS
import Admin from "./components/Admin";
import AdminHome from "./components/AdminDashboard/AdminHome";
import AdminAddtour from "./components/AdminDashboard/AdminAddtour";
import AdminDeletetour from "./components/AdminDashboard/AdminDeletetour";
import AdminDeletetourManual from "./components/AdminDashboard/AdminDeletetourManual";
import AdminViewtour from "./components/AdminDashboard/AdminViewtour";
import AdminBookingInfo from "./components/AdminDashboard/AdminBookingInfo";





function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* MAIN COMPONENTS */}
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/about" element={<About />} />

      {/* USER DASHBOARD COMPONENTS */}
      <Route path="/userhome" element={<UserHome />} />
      <Route path="/userbooktour" element={<UserBooktour />} />
      <Route path="/usercancelbooking" element={<UserCancelBooking />} />
      <Route path="/userviewbooking" element={<UserViewBooking />} />
      <Route path="/usersearchtour" element={<UserSearchtour />} />
      <Route path="/useraccdetails" element={<UserAccDetails />} />
      <Route path="/useraccupdate" element={<UserAccUpdate />} />

      {/* ADMIN DASHBOARD COMPONENTS */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/adminaddtour" element={<AdminAddtour />} />
      <Route path="/admindeletetour" element={<AdminDeletetour />} />
      <Route path="/admindeletetourmanual" element={<AdminDeletetourManual />} />
      <Route path="/adminviewtour" element={<AdminViewtour />} />
      <Route path="/adminbookinginfo" element={<AdminBookingInfo />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App