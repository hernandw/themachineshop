import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { App } from './App'
import { Products } from './components/Products'

import About from './pages/About'
import Answers from './pages/Answers'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Work from './pages/Work'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App  />,
    children: [
      {
        index: true,
        element: <Products  />
      },
      
      {
        path: '/about',
        element: <About  />
      },
      {
        path: '/answers',
        element: <Answers  />
      },
      {
        path: '/contact',
        element: <Contact  />
      },
      {
        path: '/privacy',
        element: <Privacy  />
      },
      {
        path: '/work',
        element: <Work  />
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>
)
