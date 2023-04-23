import React from "react";

export const About = () => {
  return (
    <div
      id="about-us"
      className="container  max-w-7xl px-6 py-14 sm:py-20 lg:px-8 lg:py-20 "
    >
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-2xl font-bold font-semibold leading-6 text-gray-900">
            About Us
          </span>
        </div>
      </div>
      <div className="mt-10 ">
        <p className="text-sm mt-3 sm:mt-5 text-justify text-gray-600">
          RSV Healthcare is a Pharmaceutical company dedicated to providing the
          highest quality Healthcare Products to the Indian Market. The Company
          has been in the business of Processing and Distributing
          Pharmaceuticals Products across India.
        </p>

        <p className="text-sm mt-3 sm:mt-5 text-justify text-gray-600">
          SKU in Electrolytes drink, Multivitamins Drops, Dry Syrups, Tablets
          and Soft Gel capsules and Nutritional Products.
        </p>

        <p className="text-sm mt-3 sm:mt-5 text-justify text-gray-600">
          The product portfolio of RSV Healthcare is designed to address the
          needs of customers who are looking for solutions to their Health
          concerns. These concerns include High blood pressure, Cholesterol,
          Gastro, Bone health, Fatigue, Heart health and Anxiety problems. The
          Company is committed to making sure that all its customers are
          provided with the best possible Services and Products. It also aims to
          achieve excellence in Customer Satisfaction through its Excellent
          Service.
        </p>
      </div>
    </div>
  );
};
