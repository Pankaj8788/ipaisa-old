// import React from "react";
// import { travelServices } from "@/src/Assets/services";

// export default function TravelServices() {
//   return (
//     <section className="w-full main-container ">
//       <div
//         className="w-full h-[100vh]   bg-cover bg-no-repeat bg-center sticky top-10 -z-50 "
//         style={{ backgroundImage: `url(${travelServices.src})` }}
//       ></div>
//       <section className="w-full main-container h-full flex flex-col items-start justify-start gap-12 mt-10">
//         <h2 className="text-[#0E0067] text-4xl font-bold mt-4">
//           Why Choose iPaisa:
//         </h2>
//         <section className="w-full flex">
//           <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2">
//             <p className="font-bold text-2xl text-[#0E0067]">
//               One-Stop Solution:
//             </p>
//             <p className="mt-4 text-md">
//               Pay all your utility bills - electricity, water, gas, broadband,
//               mobile, and more, at a single destination. No more hopping between
//               different app.
//             </p>
//           </span>
//           <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2">
//             <p className="font-bold text-2xl text-[#0E0067]">BBPS Services:</p>
//             <p className="mt-4 text-md">
//               Explore a wide range of BBPS services, including insurance
//               premiums, mutual fund investments, and loan repayments, all under
//               one roof.
//             </p>
//           </span>
//           <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2">
//             <p className="font-bold text-2xl text-[#0E0067]">
//               Secure and Convenient
//             </p>
//             <p className="mt-4 text-md">
//               Our platform is built with state-of-the-art security measures,
//               ensuring your personal and financial information is safe. Pay your
//               bills from the comfort of your home, 24/7.
//             </p>
//           </span>
//           <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2">
//             <p className="font-bold text-2xl text-[#0E0067]">Cashback Offers</p>
//             <p className="mt-4 text-md">
//               Enjoy exclusive cashback offers and discounts when you make
//               payments through iPaisa. Save more while paying your bills! Get
//               cashback offers for every spending !
//             </p>
//           </span>
//           <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2">
//             <p className="font-bold text-2xl text-[#0E0067]">
//               Quick and Hassle-Free
//             </p>
//             <p className="mt-4 text-md">
//               Say goodbye to lengthy processes. Our user-friendly interface
//               ensures that you can complete your bill payments within seconds.{" "}
//             </p>
//           </span>
//           <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2">
//             <p className="font-bold text-2xl text-[#0E0067]">
//               Payment Reminders:
//             </p>
//             <p className="mt-4 text-md">
//               Never miss a due date again! Set up payment reminders and receive
//               notifications before your bills are due.{" "}
//             </p>
//           </span>
//         </section>
//       </section>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import { travelServices } from "@/src/Assets/services";

export default function TravelServices() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 1000, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full main-container mb-4">
      <div
        className="w-full h-[100vh] bg-cover bg-no-repeat bg-center sticky top-10 -z-50"
        style={{
          backgroundImage: `url(${travelServices.src})`,
          opacity: opacity,
          transition: "opacity 0.5s ease-out",
        }}
      ></div>
      <section className="w-full main-container h-full flex flex-col items-start justify-start gap-12 mt-10">
        <h2 className="text-[#0E0067] text-4xl font-bold mt-4">
          Why Choose iPaisa:
        </h2>
        <section className="w-full flex flex-wrap">
          <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <p className="font-bold text-2xl text-[#0E0067]">
              One-Stop Solution:
            </p>
            <p className="mt-4 text-md">
              Pay all your utility bills - electricity, water, gas, broadband,
              mobile, and more, at a single destination. No more hopping between
              different app.
            </p>
          </span>
          <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <p className="font-bold text-2xl text-[#0E0067]">BBPS Services:</p>
            <p className="mt-4 text-md">
              Explore a wide range of BBPS services, including insurance
              premiums, mutual fund investments, and loan repayments, all under
              one roof.
            </p>
          </span>
          <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <p className="font-bold text-2xl text-[#0E0067]">
              Secure and Convenient
            </p>
            <p className="mt-4 text-md">
              Our platform is built with state-of-the-art security measures,
              ensuring your personal and financial information is safe. Pay your
              bills from the comfort of your home, 24/7.
            </p>
          </span>
          <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <p className="font-bold text-2xl text-[#0E0067]">Cashback Offers</p>
            <p className="mt-4 text-md">
              Enjoy exclusive cashback offers and discounts when you make
              payments through iPaisa. Save more while paying your bills! Get
              cashback offers for every spending!
            </p>
          </span>
          <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <p className="font-bold text-2xl text-[#0E0067]">
              Quick and Hassle-Free
            </p>
            <p className="mt-4 text-md">
              Say goodbye to lengthy processes. Our user-friendly interface
              ensures that you can complete your bill payments within seconds.
            </p>
          </span>
          <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <p className="font-bold text-2xl text-[#0E0067]">
              Payment Reminders:
            </p>
            <p className="mt-4 text-md">
              Never miss a due date again! Set up payment reminders and receive
              notifications before your bills are due.
            </p>
          </span>
        </section>
      </section>
    </section>
  );
}
