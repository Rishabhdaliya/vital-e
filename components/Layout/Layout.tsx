import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Navbar/Footer";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
