import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import './index.css'
import { AppContext } from './components/context/AppContext'
import Profile from "./pages/Profile"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "", element: <Home />
    },
    {
      path: "profile", element: <Profile />
    }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
       <RouterProvider router={router} />
    </AppContext>
  </React.StrictMode>
)
