import React from "react";
import { aboutSection11, aboutSection22 } from "@/src/Assets/aboutus2";
import Image from "next/image";

export default function ContainSection() {
  return (
    <section className="w-full flex flex-col  items-center justify-between ">
      <div className="w-full flex items-start justify-between h-[30rem]  ">
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-start justify-start gap-6 h-full bg-[#0038C9]  ">
          <h2 className="text-xl lg:text-5xl font-semibold text-white main-container mt-12">
            Our Mission
          </h2>
          <div>
            <p className="text-xl lg:text-1xl font-semibold text-white main-container">
              <p>Our mission is to create a fast and secure payment system</p>
              <p>
                that enables merchants and users to make or receive payments
              </p>
              with convenience and trust. We aim to achieve this through
              continuous innovation leveraging technology. <p></p>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full overflow-hidden">
          <Image
            src={aboutSection11.src}
            alt=""
            width={500} // Specify the width here
            height={500} // Specify the height here
            className="w-full h-full object-cover bg-black"
          />
        </div>
      </div>

      <div className="w-full flex items-start flex-row-reverse justify-between h-[30rem]">
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-start justify-start gap-6 h-full bg-[#0E0067]">
          <h2 className="text-xl lg:text-5xl font-semibold text-white main-container mt-12">
            Our Vision
          </h2>
          <div>
            <p className="text-xl lg:text-1xl font-semibold text-white main-container">
              <p>
                To revolutionise the way individuals and businesses manage their
                utility payments,providing a seamless, secure,
              </p>
              <p>
                and user-friendly platform that empowers our customerswith
                convenience,efficiency, and financial peace of mind.
              </p>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full overflow-hidden">
          <Image
            src={aboutSection22.src}
            alt=""
            width={500} // Specify the width here
            height={500} // Specify the height here
            className="w-full h-full object-cover bg-black"
          />
        </div>
      </div>
    </section>
  );
}
