import React, { useState, useEffect } from "react";
import UserDashNavbar from "./UserDashNavbar";
import Image from "./assets/Man.png";
import axios from "axios";
import swal from 'sweetalert';

function UserAccDetails() {
  const [userid] = useState(sessionStorage.getItem("userid"));
  const [utype] = useState(sessionStorage.getItem("utype"));
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:5000/user/userdetails/" + userid)
      .then((response) => {
        console.log(response.data);
        setFirstname(response.data[0].firstname);
        setLastname(response.data[0].lastname);
        setEmail(response.data[0].email);
        setGender(response.data[0].gender);
        setPhone(response.data[0].phone);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <UserDashNavbar />

      <main className="relative isolate ml-60 mt-32">
        <div>
          <h1 className="font-bold text-center text-3xl">ACCOUNT DETAILS</h1>
        </div>
        <div className=" ml-80 mr-32 mt-10">
          <div
            role="status"
            class="space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-full h-48 sm:w-96">
              <img src={Image} />
            </div>
            <div className="w-full space-x-10 space-y-6">
              <div className="h-2.5 w-48 mb-4 ml-10">
                <b>USER TYPE : </b> <i>{utype}</i>
              </div>
              <div className="h-2.5 w-48 mb-4">
                <b>USER ID :</b> <i>{userid}</i>
              </div>
              <div className="h-2.5 w-48 mb-4 ">
                <b>USER FIRSTNAME :</b> <i>{firstname}</i>
              </div>
              <div className="h-2.5 w-48 mb-4 ">
                <b>USER LASTNAME :</b> <i>{lastname}</i>
              </div>
              <div className="h-2.5 w-48 mb-4 ">
                <b>GENDER :</b> <i>{gender}</i>
              </div>
              <div className="h-2.5 w-60 mb-4 ">
                <b>PHONE NUMBER :</b> <i>{phone}</i>
              </div>
              <div className="h-2.5 w-48 mb-4 ">
                <b>EMAIL ID :</b> <i>{email}</i>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserAccDetails;
