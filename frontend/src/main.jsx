import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { CartProvider } from './context/CartContext';
import {
 Products,
 Admin,
 Users,
 ProductAdd,
 ErrorPage,
 ProductDetail,
 loaderDetail as detailProductLoader,
 //loader as usersLoader,
 //loaderProductos as productsLoader,
} from './components/';

import {
 About,
 Answers,
 Contact,
 Privacy,
 //Register,
 Work,
 //UserEdit,
 //action as NewUser,
 //loader as EditUserLoader,
 Cart,
 //actionUser as EditarUsuarioAction,
} from './pages/';

const router = createBrowserRouter([
 {
  path: '/',
  element: <App />,
  children: [
   {
    index: true,
    element: <Products />,
   },

   {
    path: '/about',
    element: <About />,
   },
   {
    path: '/answers',
    element: <Answers />,
   },
   {
    path: '/contact',
    element: <Contact />,
   },
   {
    path: '/privacy',
    element: <Privacy />,
   },
   {
    path: '/work',
    element: <Work />,
   },
   {
    path: '/cart',
    element: <Cart />,
   },
   /*    {
    path: '/register',
    element: <Register />,
    action: NewUser,
   }, */
  ],
 },
 {
  path: '/admin',
  element: <Admin />,
  children: [
   {
    index: true,
    element: <h3>Inicio</h3>,
   },
   {
    path: '/admin/users',
    element: <Users />,
    // loader: usersLoader,
    errorElement: <ErrorPage />,
   },
   {
    path: '/admin/products',
    element: <ProductAdd />,
    //loader: productsLoader
   },
  ],
 },
 {
  path: '/productdetail/:productId/',
  element: <ProductDetail  />,
  loader: detailProductLoader
 }
 /*  {
  path: '/admin/user/:userId/edit',
  element: <UserEdit />,
  loader: EditUserLoader,
  action: EditarUsuarioAction,
  errorElement: <ErrorPage />,
 }, */
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <CartProvider>
   <RouterProvider router={router} />
  </CartProvider>
 </React.StrictMode>
);
