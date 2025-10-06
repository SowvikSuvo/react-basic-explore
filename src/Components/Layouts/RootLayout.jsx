import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
    
      <main className="min-h-[calc(100vh-285px)]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
