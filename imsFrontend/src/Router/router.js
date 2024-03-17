import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
// import TestPage from "../TestPage";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Home/Category";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Home/Product";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/',
        element: 
            <Layout />,
        children: [
            
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'category',
                element: <Category />
            },
            {
                path: 'product',
                element: <Product />
            }          
        ]
    }
])

export default router;