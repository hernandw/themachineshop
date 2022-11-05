
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Products, Admin, Users, ProductAdd } from "./components/";


import { About, Answers, Contact, Privacy, Register, Work } from "./pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Products />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/answers",
        element: <Answers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: '/admin',
    element: <Admin  />,
    children: [
      {
        index: true,
        element: <h3>Inicio</h3>
      },
      {
        path: '/admin/users',
        element: <Users  />
      },
      {
        path: '/admin/products',
        element: <ProductAdd  />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
