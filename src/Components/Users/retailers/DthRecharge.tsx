import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import BBPS from "../../../Assets/BBPSLogo/BBPS.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

import { Height } from "@mui/icons-material";

export default function DthRecharge() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      operator: "",
      amount: "",
    },
    validationSchema: Yup.object({
      mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number")
        .test(
          "not-all-zeros",
          "Mobile number cannot be all zeros",
          (value) => value !== "0000000000"
        )
        .test(
          "not-eight-consecutive-zeros",
          "Mobile number cannot contain eight consecutive zeros",
          (value) => value !== undefined && !/00000000/.test(value)
        )
        .required("Mobile number is required"),
      operator: Yup.string().required("Operator is required"),
      amount: Yup.string()
        .matches(
          /^[1-9][0-9]*$/,
          "Amount must be a positive number without leading zeros"
        )
        .required("Amount is required"),
    }),
    onSubmit: (values) => {
      // Perform form submission logic here
      console.log("Form submitted with values:", values);
      setSubmitSuccess(true);
    },
  });

  // Function to restrict non-numeric input
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.charCode || e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  return (
    <section className="">
      <form className="main-container" onSubmit={formik.handleSubmit}>
        <p className="text-3xl font-bold text-white ">Retailer Services</p>
        <div className="flex mt-4">
          <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-9 py-10  mb-2 ">
            <p className="font-bold text-4xl text-[#0B12B7]">
              DTH Recharge: Uninterrupted Entertainment!
            </p>

            <p className="mt-8 text-2xl ">
              Elevate your entertainment with hassle- free DTH recharges that
              put you in control of your TV experience{" "}
            </p>
          </span>
          <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-[#ddf1f5] ml-2 rounded-md">
            <p className="text-[#0B12B7] text-3xl font-bold">DTH Recharge</p>

            <div className="flex flex-col mt-4">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="text-[#0B12B7] font-medium text-md">Operator</p>
                <Image
                  style={{ height: 30, width: 50 }}
                  src={BBPS}
                  alt=""
                />
              </div>

              <select
                name="operator"
                className="w-3/4 bg-white rounded-md mt-2 h-10"
                value={formik.values.operator}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  borderColor:
                    formik.touched.operator && formik.errors.operator
                      ? "red"
                      : "",
                }}
              >
                <option value="">Select Operator</option>
                <option value="">Airtel Digital TV</option>
                <option value="">Videocon D2H</option>
                <option value="">Tata Play (Formerly Tata Sky)</option>
                <option value="">Sun Direct</option>
                <option value="">Dish TV</option>
                <option value="">Reliance Digital TV</option>
                <option value="">Jio Fiber</option>
              </select>
              {formik.touched.operator && formik.errors.operator && (
                <div style={{ color: "red", marginTop: "4px" }}>
                  {formik.errors.operator}
                </div>
              )}
            </div>

            <div className="flex flex-col mt-4">
              <p className="text-[#0B12B7] font-medium text-md">
                Mobile Number / Customer Id
              </p>
              <TextField
                type="text"
                placeholder="Mobile Number / Customer Id"
                className="w-3/4 bg-white rounded-md mt-2"
                name="mobileNumber"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.mobileNumber &&
                  Boolean(formik.errors.mobileNumber)
                }
                helperText={
                  formik.touched.mobileNumber && formik.errors.mobileNumber
                }
                inputProps={{
                  maxLength: 10,
                  pattern: "[0-9]*",
                  title: "Please enter a 10-digit number",
                  style: {
                    height: "5px",
                  },
                }}
                onKeyPress={handleKeyPress}
              />
            </div>

            <div className="flex flex-col mt-4">
              <p className="text-[#0B12B7] font-medium text-md">Amount</p>
              <TextField
                type="text"
                placeholder="₹ Amount"
                className="w-3/4 bg-white rounded-md mt-2"
                name="amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
                inputProps={{
                  pattern: "[0-9]*",
                  title: "Please enter a valid amount",
                  style: {
                    height: "5px",
                  },
                }}
                onKeyPress={handleKeyPress}
              />
            </div>

            <div className="flex flex-col mt-6">
              <Button
                type="submit"
                className="w-3/4 bg-themeColor text-white px-4 py-3 rounded-md hover:bg-green-500 hover:text-white"
              >
                Confirm
              </Button>
              {submitSuccess && (
                <p className="text-green-500 mt-4">
                  Recharge successfully submitted!
                </p>
              )}
            </div>
          </span>
        </div>
      </form>
    </section>
  );
}
