import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { CartProvider } from "./context/CartContext";
import {
	Products,
  
	Admin,
	Users,
	ProductAdd,
	ErrorPage,
	ProductDetail,
	
  loaderProduct,
} from "./components/";

import { About, Answers, Contact, Privacy, Work, Cart } from "./pages/";


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
				path: "/cart",
				element: <Cart />,
			},
      {
        path: '/product/:id_product',
        element: <ProductDetail  />,
        loader: loaderProduct
      }
		],
	},
	{
		path: "/admin",
		element: <Admin />,
		children: [
			{
				index: true,
				element: <h3>Inicio</h3>,
			},
			{
				path: "/admin/users",
				element: <Users />,

				errorElement: <ErrorPage />,
			},
			{
				path: "/admin/products",
				element: <ProductAdd />,
			},
		],
	},

]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	</React.StrictMode>
);
