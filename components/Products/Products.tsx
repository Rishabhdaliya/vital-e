import React from "react";
import Apple from "@/public/assets/products/apple.png";
import Orange from "@/public/assets/products/orange.png";

import Image from "next/image";

export const Products = () => {
  return (
    <div
      id="products"
      className="container   max-w-7xl px-6 sm:py-20 lg:px-8 lg:py-20 "
    >
      <div className="relative mt-10">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex  justify-center">
          <span className="bg-white px-3 text-2xl font-bold font-semibold leading-6 text-gray-900">
            Products
          </span>
        </div>
      </div>
      <div className="mt-10 mb-10 ">
        <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 bg-white sm:grid-flow-col gap-10">
          <div className=" ">
            {/* <div className="mx-auto max-w-2xl px-6 lg:px-8"> */}
            <div className="bg-white mx-auto shadow-md	">
              <Image
                src={Apple}
                width={400}
                height={400}
                className="mx-auto"
                alt="vital-e apple flavour"
              />
              {/* </div> */}
            </div>
          </div>
          <div>
            <h1 className="mt-2 text-2xl text-center font-semibold tracking-tight text-gray-900 sm:text-2xl">
              Vital-E Apple Flavour
            </h1>
            <div className="mt-2 ">
              <p className="text-justify text-sm text-gray-600">
                Our new nutrition product packed with vital electrolytes such as
                sodium, vitamin-C, carbohydrates, chloride, and potassium is
                called Vital-e Apple Flavor.
              </p>
              <p className="text-justify mt-5 text-sm text-gray-600">
                These electrolytes offer a range of benefits including
                strengthening immunity, stabilizing blood sugar levels,
                balancing blood pH, improving digestion, and promoting good
                sleep. Incorporating Vital-e Apple Flavor into your daily diet
                can help you maintain optimal health and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-20 mb-10 ">
        <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 bg-white sm:grid-flow-col gap-10">
          <div className="order-1 sm:order-2">
            {/* <div className="mx-auto max-w-2xl px-6 lg:px-8"> */}
            <div className="bg-white mx-auto shadow-md	">
              <Image
                src={Orange}
                width={400}
                height={400}
                className="mx-auto"
                alt="vital-e apple flavour"
              />
            </div>
          </div>
          <div className="order-2 sm:order-1">
            <h1 className="mt-2 text-2xl text-center font-semibold tracking-tight text-gray-900 sm:text-2xl">
              Vital-E Orange Flavour
            </h1>
            <div className="mt-2 ">
              <p className="text-justify text-sm text-gray-600">
                Our new nutrition product packed with vital electrolytes such as
                sodium, vitamin-C, carbohydrates, chloride, and potassium is
                called Vital-e Orange Flavor.
              </p>
              <p className="text-justify mt-5 text-sm text-gray-600">
                These electrolytes offer a range of benefits including
                strengthening immunity, stabilizing blood sugar levels,
                balancing blood pH, improving digestion, and promoting good
                sleep. Incorporating Vital-e Apple Flavor into your daily diet
                can help you maintain optimal health and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
