import { Button, TextField } from "@mui/material";
import BBPS from "../../../Assets/BBPSLogo/BBPS.png";
import React from "react";
import Image from "next/image";

export default function RetailerPostPaidRecharge() {
  //const imageData = BBPSLogo1.src;

  return (
    <section className="">
      <form className="main-container">
        <p className="text-3xl font-bold text-white ">Retailer Services</p>
        <div className="flex mt-4">
          <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10  mb-2 ">
            <p className="font-bold text-5xl text-[#0B12B7]">
              Instant Post Paid Mobile Recharge Solution
            </p>

            <p className="mt-8 text-2xl ">
              Empower your connectivity with seamless postpaid mobile bill,
              where convenience meets innovation.
            </p>
          </span>
          <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-[#ddf1f5] ml-2 rounded-md">
            <p className="text-[#0B12B7] text-3xl font-bold">
              Post Paid Mobile Recharge
            </p>
            <div className="flex flex-col mt-4">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="text-[#0B12B7] font-medium text-md">
                  Mobile Number
                </p>
                <Image
                  style={{ height: 30, width: 50 }}
                  src={BBPS}
                  alt=""
                />
              </div>

              <TextField
                type="number"
                placeholder="Mobile Number"
                className="w-3/4 bg-white rounded-md mt-2"
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
              />
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-[#0B12B7] font-medium text-md">Operater</p>

              <select
                name=""
                id=""
                className="w-3/4 bg-white rounded-md mt-2 h-10"
              >
                <option value="">Select Operator</option>
                <option value="">Airtel PostPaid</option>
                <option value="">BSNL PostPaid</option>
                <option value="">Jio PostPaid</option>
                <option value="">MTNL PostPaid</option>
                <option value="">Vi PostPaid</option>
                <option value="">Tata Docomo CDMA Postpaid</option>
              </select>
            </div>

            {/* <div className="flex flex-col mt-4">
                  <p className="text-[#0B12B7] font-medium text-md">Circle</p>
                  <select
                    name=""
                    id=""
                    className="w-3/4 bg-white rounded-md mt-2 h-10"
                  >
                    <option value="">Select </option>
                    <option value="">Maharashtra</option>
                    <option value="">Kerala</option>
                    <option value="">Punjab</option>
                    <option value="">Rajasthan</option>
                  </select>
                </div> */}

            <div className="flex flex-col mt-4">
              <p className="text-[#0B12B7] font-medium text-md">Amount</p>
              <TextField
                type="number"
                placeholder="₹ Amount"
                className="w-3/4 bg-white rounded-md mt-2"
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
              />
            </div>
            <div className="flex flex-col mt-6">
              <button className="w-3/4 bg-themeColor text-white px-4 py-3 rounded-md hover:bg-green-500 hover:text-white">
                Confirm
              </button>
            </div>
          </span>
        </div>
      </form>
    </section>
  );
}
