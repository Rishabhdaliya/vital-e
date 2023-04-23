import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Apple from "../../public/assets/products/apple.png";
import Image from "next/image";
import { Enquiryform } from "../Form/Enquiryform";
import { Snackbar } from "../UI/Snackbar";

export const HeroSection = () => {
  const [notify, setNotify] = useState({
    open: false,
    heading: "",
    message: "",
    type: "success",
  });
  return (
    <div className="alert__layout">
      <Snackbar notify={notify} setNotify={setNotify} />
      <div className="container ">
        <div className="grid mt-5 bg-white sm:grid-flow-col gap-4">
          <div className="py-4 mb-10 text-center sm:text-left sm:py-32 order-2 sm:order-1 ">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <p className="text-base text-sm  leading-1 text-gray-600">
                  RSV-Healthcare Presents's
                </p>
                <h2 className="mt-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Revive and Hydrate with Vital-E ORS
                </h2>
                <p className="mt-2 sm:mt-6 text-md sm:max-w-lg  text-gray-600">
                  Your Ultimate Solution for Dehydration!
                </p>
              </div>
            </div>
          </div>
          <div className=" order-1 sm:order-2 ">
            <Enquiryform notify={notify} setNotify={setNotify} />
          </div>
          {/* <div className="row-span-2 col-span-2 ...">03</div> */}
        </div>
      </div>
    </div>
  );
};
