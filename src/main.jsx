import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./Components/Pages/Contact.jsx";
import About from "./Components/Pages/About.jsx";
import Home from "./Components/Pages/Home.jsx";
import RootLayout from "./Components/Layouts/RootLayout.jsx";
import PlantDetails from "./Components/Pages/PlantDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("https://openapi.programming-hero.com/api/plants"),
      },
      {
        path: "/home",
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
      {
        path: "/plant-details/:id",
        Component: PlantDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
