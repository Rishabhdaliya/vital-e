import { Layout } from "@/components/Layout/Layout";
import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import styles from "../../styles/contact.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@/components/UI/Snackbar";

const validationSchema = yup.object({
  fname: yup.string().required("First name name is required"),
  lname: yup.string().required("Last name is required"),
  company: yup.string().required("Company name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .min(10, "Enter Valid phone number")
    .max(10, "Enter Valid phone number")
    .required("Phone Number is required"),
});

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const index = () => {
  const [agreed, setAgreed] = useState(true);
  const [notify, setNotify] = useState({
    open: false,
    heading: "",
    message: "",
    type: "success",
  });
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      company: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: object, { resetForm }: any) => {
      if (agreed) {
        setNotify({
          open: true,
          heading: "Your email has been sent successfully!",
          message: "Our team will reach out to you soon.",
          type: "success",
        });
        formSubmitHandler(values);
      } else {
        setNotify({
          open: true,
          heading: "Email failed to submit",
          message: "Agree to share information with us",
          type: "error",
        });
      }
    },
  });

  const formSubmitHandler = (values: any) => {
    emailjs
      .send(
        "service_x08mdid",
        "template_3byg6bf",
        {
          fname: values.fname,
          lname: values.lname,
          company: values.company,
          email: values.email,
          phoneNumber: values.phoneNumber,
          message: values.message,
        },
        "M3xsAVa23Z4nqQbjD"
      )
      .then(
        (result) => {
          setNotify({
            open: true,
            heading: "Your email has been sent successfully!",
            message: "Our team will reach out to you soon.",
            type: "success",
          });
        },
        (error) => {
          setNotify({
            open: true,
            heading: "Email failed to submit",
            message: `error.text`,
            type: "error",
          });
        }
      );
  };

  return (
    <div className="alert__layout">
      <Snackbar notify={notify} setNotify={setNotify} />
      <Layout>
        <div className="container">
          <div className="isolate bg-white px-6 py-14 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Become A Distributor
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Aute magna irure deserunt veniam aliqua magna enim voluptate.
              </p>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fname"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      value={formik.values.fname}
                      onChange={formik.handleChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    {formik.errors.fname && formik.touched.fname ? (
                      <p className="text-red-500 text-sm">
                        {formik.errors.fname}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lname"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      value={formik.values.lname}
                      onChange={formik.handleChange}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    {formik.errors.lname && formik.touched.lname ? (
                      <p className="text-red-500 text-sm">
                        {formik.errors.lname}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Company <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                      id="company"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    {formik.errors.company && formik.touched.company ? (
                      <p className="text-red-500 text-sm">
                        {formik.errors.company}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
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
                      <p className="text-red-500 text-sm">
                        {formik.errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
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
                      id="phoneNumber"
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
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? "bg-primary" : "bg-gray-200",
                        "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? "translate-x-3.5" : "translate-x-0",
                          "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                  <Switch.Label className="text-sm leading-6 text-gray-600">
                    By selecting this, you agree to share details with us
                    {/* <a href="#" className="font-semibold text-indigo-600">
                    privacy&nbsp;policy
                  </a> */}
                    .
                  </Switch.Label>
                </Switch.Group>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl space-y-16 lg:mx-0 lg:max-w-none">
                <div>
                  <h2 className="text-3xl text-center  font-bold tracking-tight text-gray-900">
                    Get in touch
                  </h2>
                  {/* <p className="mt-4 leading-7 text-gray-600">
                  Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac
                  pellentesque.
                </p> */}
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3 lg:gap-8">
                    <div className="rounded-2xl border-2 bg-gray-50 p-10">
                      <h3 className="text-base font-semibold leading-7 text-gray-900">
                        Email
                      </h3>
                      <dl className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>
                            <a
                              // className="font-semibol"
                              href="mailto:rsvcare02@gmail.com"
                            >
                              rsvcare02@gmail.com
                            </a>
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="rounded-2xl border-2 bg-gray-50 p-10">
                      <h3 className="text-base font-semibold leading-7 text-gray-900">
                        Phone number
                      </h3>
                      <dl className="mt-2  space-y-1 text-sm leading-6 text-gray-600">
                        <div>
                          <div className="mt-1">
                            <dt className="sr-only">Phone number</dt>
                            <a href="tel:+91 7276764500">
                              <dd>+91 7276764500</dd>
                            </a>
                          </div>
                        </div>
                      </dl>
                    </div>
                    <div className="rounded-2xl border-2 bg-gray-50 p-10">
                      <h3 className="text-base font-semibold leading-7 text-gray-900">
                        Address
                      </h3>
                      <dl className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
                        <div className="mt-1">
                          <dt className="sr-only">Address</dt>
                          <dd>
                            Block no 1, Samadhi Ward, Main Road, Chandrapur (MS)
                            Pincode - 442401
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default index;
