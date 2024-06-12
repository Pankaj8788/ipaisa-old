import { mobscreen } from "@/src/Assets/home";
import { Router } from "next/router";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Breadcrumb() {
  const router = useRouter();

  return (
    <>
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-12 group bg-gradient-to-br from-[#6633CC] to-[#C6BCFF]">
        <div className="w-full mt-2 flex flex-col items-start justify-start gap-6 pt-28 h-full border-t-[1.5em] border-r-[1.5em] border-blue-900 main-container rounded-tr-[30rem] ">
          <p className="text-xl lg:text-6xl font-semibold text-white">
            Welcome to <b className="text-[#131A4A]">iPaisa</b>
          </p>
          <p className="text-xl lg:text-6xl font-semibold text-white">
            Your One-Stop
          </p>
          <p className="text-xl lg:text-6xl font-semibold text-white">
            Payment Solution!
          </p>
          <p className="text-xl lg:text-md  tracking-wide text-white ">
            iPaisa is a Online Payment and Digital Wallet App that allows you to
            make quick and safe Money Transfers with UPI. Pay Utility Bills,
            Recharge Mobile, DTH, etc.
          </p>

          <button
            className="px-8 py-3 rounded-3xl text-[#131A4A] font-bold capitalize bg-white  transition-all duration-500 ease-in-out active:scale-90 overflow-hidden "
            onClick={() => {
              router.push("/admin");
            }}
          >
            Get Started
          </button>
        </div>
        <div className="w-full flex items-center main-container justify-end ">
          <Image
            src={mobscreen.src}
            alt=""
            width={500}
            height={500}
            className="h-[45em] w-auto  group-hover:opacity-100 "
          />
        </div>
      </section>
    </>
  );
}
