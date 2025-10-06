import React, { createContext, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LoadingSpinner from "../LoadingSpinner";

export const CartContext = createContext({});

const RootLayout = () => {
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();
  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar></Navbar>
        {navigation?.state === "loading" ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <main className="min-h-[calc(100vh-285px)]">
            <Outlet></Outlet>
          </main>
        )}

        <Footer></Footer>
      </CartContext.Provider>
    </div>
  );
};

export default RootLayout;
