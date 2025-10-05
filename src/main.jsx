import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./Components/Pages/Contact.jsx";
import About from "./Components/Pages/About.jsx";
import Home from "./Components/Pages/Home.jsx";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home></Home>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
