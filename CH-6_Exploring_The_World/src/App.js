import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestrauntMenu/>,
      }
    ]
  },
  
])

  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router = {appRouter} />);

