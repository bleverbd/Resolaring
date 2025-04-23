import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home/Home.jsx';
import Gallery from './pages/gallery/Gallery.jsx';
import Marketplace from './pages/marketplace/Marketplace.jsx';
import Process from './pages/process/Process.jsx';
import Resolaring from './pages/resolaring/Resolaring.jsx';
import Login from './pages/login/Login.jsx';
import Cart from './pages/cart/Cart';
import ViewProduct from './pages/marketplace/ViewProduct';
import Option from './pages/login/Option';
import EmailVerify from './pages/login/EmailVerify';
import SendCode from './pages/login/SendCode';
import NewPassword from './pages/login/NewPassword';
import Seller from './pages/login/Seller';
import Buyer from './pages/login/Buyer';

import Overview from './pages/dasboard/Overview';
import Dashboard from './Dashboard';
import OrderList from './pages/dasboard/OrderList';
import AccountSettings from './pages/dasboard/AccountSettings';
import AddNewListing from './pages/dasboard/AddNewListing';
import ManageListings from './pages/dasboard/ManageListings';

const router = createBrowserRouter([

  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/option",
    element: <Option/>,
  },
  {
    path: "/buyer",
    element: <Buyer/>,
  },
  {
    path: "/seller",
    element: <Seller/>,
  },
  {
    path: "/emailverify",
    element: <EmailVerify/>,
  },
  {
    path: "/sendcode",
    element: <SendCode/>,
  },
  {
    path: "/newpassword",
    element: <NewPassword/>,
  },


  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },

      {
        path: "/gallery",
        element: <Gallery/>,
      },

      {
        path: "/marketplace",
        element: <Marketplace/>,
      },

      {
        path: "/process",
        element: <Process/>,
      },

      {
        path: "/resolaring",
        element: <Resolaring/>,
      },

      {
        path: "/bookonline",
        element: <Resolaring/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/marketplace/:id",
        element: <ViewProduct/>,
      },

    ],
  },

  {
    path: "/dashboard",
    element:<Dashboard/>,
    children: [
      { path: "",
        element:<Overview/>
      },

      { path: "orderlist", 
        element: <OrderList/>
      },

      
      { path: "accountsetting", 
        element:<AccountSettings/>
      },
      
      { path: "addnewlisting", 
        element: <AddNewListing/>
      },
      
      { path: "managelisting", 
        element: <ManageListings/>
      },

    ],
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
