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
          <div className="py-24 sm:py-32 order-2 sm:order-1 ">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <p className="text-base font-semibold leading-1 text-gray-600">
                  Get the help you need
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
                  Support center
                </h2>
                <p className="mt-6 text-lg sm:max-w-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
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
