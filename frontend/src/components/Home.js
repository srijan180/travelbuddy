import React from "react";
import Typed from "react-typed";
import Hero_image from "../assets/Hero_image.png";
import Bali from "../assets/Bali.jpg";
import Paris from "../assets/Paris.jpg";
import Himalaya from "../assets/Himalaya.jpg";
import Rajasthan from "../assets/Rajasthan.jpg";
import Navbar from "./Navbar";
import Tokyo from "../assets/tokyo.jpg";
import Newyork from "../assets/Newyork.jpg";
import Syndey from "../assets/Syndey.jpg";
import Barcelona from "../assets/Barcelona.jpg";
import Capetown from "../assets/Capetown.jpg";
import London from "../assets/London.jpg";
import Darjeeling from "../assets/Darjeeling.jpg";
import Rio from "../assets/Rio.jpg";
import Taj from "../assets/Taj.jpg";
import Pink from "../assets/Pink.jpg";
import Ladakh from "../assets/Ladakh.jpg";



function Home() {
  /* STORING POPULAR DESTINATION ON PRODUCT VARIABLE */
  const products = [
    {
      id: 1,
      name: "Bali, Indonesia",
      href: "#",
      imageSrc: Bali,
      imageAlt: "Front of men's Basic Tee in black.",
      rating: "⭐ 5.0",
    },
    {
      id: 2,
      name: "Paris, France",
      href: "#",
      imageSrc: Paris,
      imageAlt: "Front of men's Basic Tee in black.",
      rating: "⭐ 4.9",
    },
    {
      id: 3,
      name: "Himalaya, India",
      href: "#",
      imageSrc: Himalaya,
      imageAlt: "Front of men's Basic Tee in black.",
      rating: "⭐ 5.0",
    },
    {
      id: 4,
      name: "Rajasthan, India",
      href: "#",
      imageSrc: Rajasthan,
      imageAlt: "Front of men's Basic Tee in black.",
      rating: "⭐ 4.9",
    },
  ];

  return (
    <div>
      <Navbar />
      {/* TOP BACKGROUND COLOUR STARTS HERE */}
      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />

            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* TOP BACKGROUND COLOUR ENDS HERE */}

        {/* HERO SECTION STARTS HERE */}

        <section className="items-center  px-4  pb-12 mx-auto lg:flex md:px-20 flex-wrap relative mt-11 pt-9">
          <div className="flex-1 sm:text-center  lg:text-left mt-10 ">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl py-3 space-y-4">
              Never Stop <br />
              <div className="">Exploring The World.</div>
            </h1>
            <p className="mt-2 text-2xl leading-8 text-gray-800 tracking-wide">
              So your next destination is
              <Typed
                className="font-bold pl-2 text-purple-600"
                strings={[
                  "London.",
                  "Bali.",
                  "Maldives.",
                  "Paris.",
                  "Dubai.",
                  "Jaipur.",
                  "Goa.",
                ]}
                typeSpeed={130}
                backSpeed={160}
                loop
              />
            </p>
            <p className="mt-3 text-medium text-gray-600">
              Let us inspire your next adventure. From majestic landscaped to
              vibrant cityscape,
              <br />
              experience the world's more awe-inspiring destinations.
              <br />
              Your journey begins now.
            </p>
            <br />
            <p>
              <a
                href="#search"
                className="rounded-md leading-10  bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 p-8"
              >
                Get started
              </a>
              <a
                href="#populardestination"
                className="text-sm font-semibold leading-6 text-gray-900 pl-5"
              >
                Explore Popular Locations <span aria-hidden="true">→</span>
              </a>
            </p>
          </div>
          <div className=" mt-11 pt-15 ml-11">
            <img src={Hero_image} alt="" className="object-cover w-85 h-96" />
          </div>
        </section>

        {/* HERO SECTION ENDS HERE */}

        {/* SEARCH SECTION STARTS HERE */}

        <div className="ml-80 mt-48 mr-80" id="search">
          <div className="flex justify-center">
            <h1 className="font-bold text-6xl text-center mt-20">
              Find Your Perfect
              <p className="text-5xl text-center font-semibold mt-3">
                Gateway.
              </p>
            </h1>
          </div>
          <form>
            <div class="relative mt-10">
              {/*Search Logo*/}
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ml-4">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-14 text-sm text-gray-900 border border-purple-200 rounded-full bg-white focus:ring-purple-500 focus:border-purple-500"
                placeholder="Search your favorite location"
                required
              />

              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-full text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* SEARCH SECTION ENDS HERE */}

        {/* POPULAR DESTINATIONS SECTION STARTS HERE */}

        <div id="populardestination">
          <div className="bg-white mt-40">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 ">
                Popular Destinations
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* POPULAR DESTINATIONS SECTION ENDS HERE */}

        {/* OUR RECOMMENDATIONS  SECTION STARTS HERE */}

        <div id="populardestination">
          <div className="bg-white mt-22">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 ">
                Our Recommendations
              </h2>

              <div className="mt-11">
                <ul
                  role="list"
                  class="grid gap-x-8 gap-y-8 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2"
                >
                  <li>
                    <div class="flex items-center gap-x-3">
                      <img
                        src={Tokyo}
                        width="90px"
                        height="90px"
                        className="rounded-lg  shadow-lg"
                      />

                      <div>
                        <h3 class="text-base font-semibold leading-4 mt-2 tracking-tight text-purple-500">
                          Tokyo
                        </h3>
                        <p class=" text-xs font-semibold leading-3 text-gray-300">
                          Japan
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-x-3">
                      <img
                        src={Newyork}
                        width="85px"
                        height="85px"
                        className="rounded-lg  shadow-lg"
                      />

                      <div>
                        <h3 class="text-base font-semibold leading-4 mt-2 tracking-tight text-purple-500">
                          New York
                        </h3>
                        <p class=" text-xs font-semibold leading-3 text-gray-300">
                          USA
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-x-3">
                      <img
                        src={Syndey}
                        width="85px"
                        height="85px"
                        className="rounded-lg  shadow-lg"
                      />

                      <div>
                        <h3 class="text-base font-semibold leading-4 mt-2 tracking-tight text-purple-500">
                          Sydney
                        </h3>
                        <p class=" text-xs font-semibold leading-3 text-gray-300">
                          Australia
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-x-3">
                      <img
                        src={Barcelona}
                        width="85px"
                        height="85px"
                        className="rounded-lg  shadow-lg"
                      />

                      <div>
                        <h3 class="text-base font-semibold leading-4 mt-2 tracking-tight text-purple-500">
                          Barcelona
                        </h3>
                        <p class=" text-xs font-semibold leading-3 text-gray-300">
                          Spain
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-x-3">
                      <img
                        src={Capetown}
                        width="85px"
                        height="85px"
                        className="rounded-lg  shadow-lg"
                      />

                      <div>
                        <h3 class="text-base font-semibold leading-4 mt-2 tracking-tight text-purple-500">
                          Cape Town
                        </h3>
                        <p class=" text-xs font-semibold leading-3 text-gray-300">
                          South Africa
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-x-3">
                      <img
                        src={London}
                        width="85px"
                        height="85px"
                        className="rounded-lg  shadow-lg"
                      />

                      <div>
                        <h3 class="text-base font-semibold leading-4 mt-2 tracking-tight text-purple-500">
                          London
                        </h3>
                        <p class=" text-xs font-semibold leading-3 text-gray-300">
                          UK
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-x-3">
                      <img
                        src={Darjeeling}
                        width="85px"
                        height="85px"
                        className="rounded-lg  shadow-lg"
                      />

                      <div>
                        <h3 class="text-base font-semibold leading-4 mt-2 tracking-tight text-purple-500">
                          Darjeeling
                        </h3>
                        <p class=" text-xs font-semibold leading-3 text-gray-300">
                          India
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-x-3">
                      <img
                        src={Rio}
                        width="85px"
                        height="85px"
                        className="rounded-lg  shadow-lg"
                      />

                      <div>
                        <h3 class="text-base font-semibold leading-4 mt-2 tracking-tight text-purple-500">
                          Rio de Janeiro
                        </h3>
                        <p class=" text-xs font-semibold leading-3 text-gray-300">
                          Brazil
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-x-3">
                      <img
                        src={Taj}
                        width="85px"
                        height="85px"
                        className="rounded-lg  shadow-lg"
                      />

                      <div>
                        <h3 class="text-base font-semibold leading-4 mt-2 tracking-tight text-purple-500">
                          Taj Mahal
                        </h3>
                        <p class=" text-xs font-semibold leading-3 text-gray-300">
                          Agra
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-x-3">
                      <img
                        src={Pink}
                        width="85px"
                        height="85px"
                        className="rounded-lg  shadow-lg"
                      />

                      <div>
                        <h3 class="text-base font-semibold leading-4 mt-2 tracking-tight text-purple-500">
                          Pink City
                        </h3>
                        <p class=" text-xs font-semibold leading-3 text-gray-300">
                          Jaipur
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center gap-x-3">
                      <img
                        src={Ladakh}
                        width="85px"
                        height="85px"
                        className="rounded-lg  shadow-lg"
                      />

                      <div>
                        <h3 class="text-base font-semibold leading-4 mt-2 tracking-tight text-purple-500">
                          Ladakh
                        </h3>
                        <p class=" text-xs font-semibold leading-3 text-gray-300">
                          India
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* OUR RECOMMENDATIONS SECTION ENDS HERE */}

        {/* BOTTOM BACKGROUND COLOUR STARTS HERE */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />

            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* BOTTOM BACKGROUND COLOUR ENDS HERE */}
      </div>
    </div>
  );
}

export default Home;
