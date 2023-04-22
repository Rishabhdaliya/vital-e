import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { useAlert } from "../../hooks/useAlert";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .min(10, "Enter Valid phone number")
    .max(10, "Enter Valid phone number")
    .required("Phone Number is required"),
});

export const Enquiryform = () => {
  const [notify, setNotify] = useState({
    open: false,
    heading: "",
    message: "",
    type: "success",
  });
  //   const {} = useAlert();

  const formik = useFormik({
    initialValues: {
      company: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: object, { resetForm }: any) => {
      console.log(values);
      formSubmitHandler(values);
    },
  });

  const formSubmitHandler = (values: any) => {
    emailjs
      .send(
        "service_x08mdid",
        "template_2ba3oqh",
        {
          company: values.company,
          email: values.email,
          phoneNumber: values.phoneNumber,
        },
        "M3xsAVa23Z4nqQbjD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setNotify({
            open: false,
            heading: "Your email has been sent successfully!",
            message: "Our team will reach out to you soon.",
            type: "success",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="isolate bg-white px-1 py-3 sm:py-8 lg:px-1">
        <div className="mx-auto max-w-xs text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Get In Touch
          </h2>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto mt-5 max-w-xs sm:mt-5"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-1">
            <div className="sm:col-span-1">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                ) : null}
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>IN</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phone-number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.phoneNumber}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
