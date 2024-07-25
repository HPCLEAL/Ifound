import React from "react";
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import HomePage from "./pages/home-page/home";
import FeedVagas from "./pages/Vagas";


const router =
createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>
    },
    {
        path:'/vagas',
        element: <FeedVagas/>
    }
],
)
const Routes=()=>{
 return   <RouterProvider router={router}/>
}


export  default  Routes