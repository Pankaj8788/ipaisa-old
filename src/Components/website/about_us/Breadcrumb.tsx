import React from "react";
import { breadCrumb1, breadCrumb2 } from "@/src/Assets/about";
import Image from "next/image";
import { aboutusimg } from "@/src/Assets/aboutus2";

export default function Breadcrumb() {
  return (
    <section
      className="w-full main-container flex flex-col-reverse md:flex-row items-center justify-between gap-6 my-12 "
      style={{ backgroundImage: `url(${breadCrumb2.src})` }}
    >
      <div
        className="w-full flex flex-col items-start justify-start gap-6 "
        style={{ marginTop: "15%" }}
      >
        <p className="text-xl lg:text-5xl font-bold text-[#0E0067] logoWarper_one">
          About Us
        </p>
        <p className="text-xl lg:text-1xl  font-semibold logoWarper_one">
          iPaisa is an Indian payment service provider that provides a mobile
          phone-based payment system and digital wallet.
        </p>
        <p className="text-xl lg:text-1xl  font-semibold logoWarper_one">
          iPaisa is a Online Payment and Digital Wallet App that allows you to
          make quick and safe Money Transfers with UPI. Pay Utility Bills,
          Recharge Mobile, DTH, etc.
        </p>
      </div>
      <div className="w-full flex items-center justify-end">
        <Image
          src={breadCrumb1.src}
          alt=""
          height={500}
          width={500}
          className="h-[35em] w-auto"
        />
      </div>
    </section>
  );
}
