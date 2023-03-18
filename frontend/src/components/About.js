import React from "react";
import Navbar from "./Navbar";
import Reactimg from "../assets/Reactimg.png";
import Nodejs from "../assets/Nodejs.png";
import Js from "../assets/Js.png";
import Tailwind from "../assets/Tailwind.png";
import Mongo from "../assets/Mongo.png";

function About() {
  return (
    <div>
      <Navbar />

      <main className="mt-32 ml-20">
        <div>
          <blockquote class="text-xl italic font-normal text-gray-600 ">
            <svg
              aria-hidden="true"
              class="w-10 h-10 text-gray-400 "
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <p className="mr-20">
              "Welcome to TravelBuddy, where we aim to inspire and assist
              travelers around the world. Our website is designed to be a
              one-stop destination for all your travel needs, providing valuable
              information and tips on the best places to visit, things to do,
              and where to stay. We believe that travel is not just about
              reaching your destination but also about the journey itself.
              Therefore, we are dedicated to providing you with useful and
              engaging content that will help you plan your trip and make the
              most of your travel experiences. Our team of experienced travelers
              and travel experts have explored some of the most fascinating
              destinations around the world and are excited to share their
              insights and recommendations with you. Whether you're a seasoned
              traveler or planning your first trip, we hope our website will be
              a valuable resource for you."
            </p>
          </blockquote>
        </div>
        <div className="mt-20 mr-32">
          <p className="mb-3 font-light text-gray-500  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-purple-500  first-letter:mr-3 first-letter:float-left">
            This is a MERN stack project.
          </p>
          <p className="font-light text-gray-500 dark:text-gray-400">
            MERN stack programming is a popular web development technology stack
            that consists of four key technologies: MongoDB, Express, React, and
            Node.js. MongoDB is a NoSQL database that allows for scalable,
            flexible, and fast data storage. Express is a web application
            framework that enables the creation of robust APIs and web
            applications. React is a powerful JavaScript library for building
            user interfaces that can render on both client and server-side.
            Node.js is a server-side runtime environment that allows JavaScript
            code to be executed on the server. Together, these technologies
            provide a powerful, efficient, and full-stack solution for building
            modern web applications. MERN stack programming is particularly
            well-suited for building scalable and real-time applications that
            require frequent updates
          </p>
        </div>
        <div className="bg-white py-24 sm:py-32  mr-40 ml-9">
          <div className="mx-auto max-w-full ">
            <h2 className="text-center text-2xl ml-5 font-semibold leading-8 text-gray-900 ">
              Technologies Used
            </h2>
            <div className="mx-auto mt-14  grid max-w-lg grid-cols-4 items-center gap-x-1 gap-y-1 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={Reactimg}
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={Nodejs}
                alt="Reform"
                width={700}
                height={500}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={Js}
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src={Tailwind}
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={Mongo}
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32  mr-40 ml-9">
          <div className="mx-auto max-w-full ">
            <h2 className="text-2xl font-semibold leading-8 text-gray-900 text-center ml-10">
              Our Team
            </h2>
            <div className="mx-auto mt-14 text-center grid max-w-lg grid-cols-4 items-center gap-x-1 gap-y-1 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <p className="font-semibold text-1xl">Srijan Majhi</p>
              <p className="font-semibold text-1xl">Nazeer Ahmed Khan</p>
              <p className="font-semibold text-1xl">Purushottam Kumar</p>
              <p className="font-semibold text-1xl">Harsh Kumar Singh</p>
              <p className="font-semibold text-1xl">Abhijeet Prasad</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
