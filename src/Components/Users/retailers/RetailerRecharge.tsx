import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

interface FormValues {
  mobileNumber: string;
  operator: string;
  circle: string;
  amount: string;
}

export default function RetailerRecharge() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [enteredValues, setEnteredValues] = useState<FormValues>({
    mobileNumber: '',
    operator: '',
    circle: '',
    amount: '',
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      mobileNumber: "",
      operator: "",
      circle: "",
      amount: "",
    },
    validationSchema: Yup.object({
      mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number")
        .test("not-all-zeros", "Mobile number cannot be all zeros", value => value !== "0000000000")
        .test("not-eight-consecutive-zeros", "Mobile number cannot contain eight consecutive zeros", value => value !== undefined && !/00000000/.test(value))
        .required("Mobile number is required"),
      operator: Yup.string().required("Operator is required"),
      circle: Yup.string().required("Circle is required"),
      amount: Yup.string()
        .matches(/^[1-9][0-9]*$/, "Amount must be a positive number without leading zeros")
        .required("Amount is required"),
    }),
    onSubmit: async values => {
      console.log("Form submitted with values:", values);
      setEnteredValues(values);
      setSubmitSuccess(true);
      
      // API call
      try {
        const response = await fetch('/api/recharge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Success:', result);
        setSubmitSuccess(true);  // Optionally handle success state
      } catch (error) {
        console.error('Error:', error);
        setSubmitSuccess(false); // Optionally handle error state
      }
    },
  });

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.charCode || e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };


  return (
    <section>
      <form className="main-container" onSubmit={formik.handleSubmit}>
        <p className="text-3xl font-bold text-white">Retailer Services</p>
        <div className="flex mt-4">
          <div className="w-full md:w-1/2 px-10 py-10 mb-2">
            <p className="font-bold text-5xl text-[#0B12B7]">
              Instant Prepaid Mobile Recharge Solution
            </p>
            <p className="mt-8 text-2xl">
              Empower your connectivity with seamless prepaid mobile recharges,
              where convenience meets innovation.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-[#ddf1f5] ml-2 rounded-md">
            <p className="text-[#0B12B7] text-3xl font-bold">Mobile Recharge</p>
            <div className="flex flex-col mt-4">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="text-[#0B12B7] font-medium text-md">Mobile Number</p>
              </div>
              <TextField
                type="text"
                placeholder="Mobile Number"
                className="w-3/4 bg-white rounded-md mt-2"
                name="mobileNumber"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                inputProps={{
                  maxLength: 10,
                  pattern: "[0-9]*",
                  title: "Please enter a 10-digit number",
                  style: { height: "5px" },
                }}
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-[#0B12B7] font-medium text-md">Operator</p>
              <select
                name="operator"
                className="w-3/4 bg-white rounded-md mt-2 h-10"
                value={formik.values.operator}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  borderColor: formik.touched.operator && formik.errors.operator ? "red" : "",
                }}
              >
                <option value="">Select Operator</option>
                <option value="Airtel">Airtel</option>
                <option value="BSNL">BSNL</option>
                <option value="Jio">Jio</option>
                <option value="MTNL">MTNL</option>
                <option value="Vi">Vi</option>
                <option value="Tata Docomo CDMA Postpaid">Tata Docomo CDMA Postpaid</option>
              </select>
              {formik.touched.operator && formik.errors.operator && (
                <div style={{ color: "red", marginTop: "4px" }}>{formik.errors.operator}</div>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-[#0B12B7] font-medium text-md">Circle</p>
              <select
                name="circle"
                className="w-3/4 bg-white rounded-md mt-2 h-10"
                value={formik.values.circle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  borderColor: formik.touched.circle && formik.errors.circle ? "red" : "",
                }}
              >
                <option value="">Select Circle</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Kerala">Kerala</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
              </select>
              {formik.touched.circle && formik.errors.circle && (
                <div style={{ color: "red", marginTop: "4px" }}>{formik.errors.circle}</div>
              )}
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
                  style: { height: "5px" },
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
                <p className="text-green-500 mt-4">Recharge successfully submitted!</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
