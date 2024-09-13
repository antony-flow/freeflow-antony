import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/aboutus/AboutUs.jsx";
import ContactUs from "./pages/contactus/ContactUs.jsx";
import Home from "./pages/Home/Home.jsx";
import Body from "./pages/Home/Body.jsx";
import "./App.css";
import ThankYou from "./pages/contactus/ThankYou.jsx";
// import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs/>,
      },
      {
        path: "/thankyou",
        element: <ThankYou/>
      },
      {
        path: "/services",
        element: <AboutUs />,
      },
      {
        path: "/industries",
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);
