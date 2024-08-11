import {
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import ProductDetails from "../pages/ProductDetails";
import AboutUsPage from "../pages/AboutUsPage";
import CheakOut from "../pages/CheakOut";
import CardPage from "../pages/CardPage";
import ManagementPage from "../pages/ManagementPage";
import AddNewProduct from "../components/NewProduct/AddNewProduct";
import ProductUpdate from "../components/ProductUpdate/ProductUpdate";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      children: [
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: '/products',
            element: <ProductPage/>
        },
        {
            path: '/productsDetails/:id',
            element: <ProductDetails/>
        },
        {
            path: '/aboutUs',
            element: <AboutUsPage/>
        },
        {
            path: '/checkout',
            element: <CheakOut/>
        },
        {
            path: '/cart',
            element: <CardPage/>
        },
        {
            path: '/productManagement',
            element: <ManagementPage/>
        },
        {
            path: '/admin/products/new',
            element: <AddNewProduct/>
        },
        {
            path: '/admin/products/edit/:id',
            element: <ProductUpdate/>
        },
      ]
    },
  ]);