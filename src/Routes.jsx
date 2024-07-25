import React from "react";
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import HomePage from "./pages/home-page/home";


const router =
createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>
    }
],
)
const Routes=()=>{
 return   <RouterProvider router={router}/>
}


export  default  Routes