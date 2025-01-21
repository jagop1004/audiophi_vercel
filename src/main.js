import React, {useEffect} from "react";
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import WebFont from "webfontloader"
//css
import './css/general.css'
//components
import MainLayout from "./components/general/mainLayout";
import Home from './components/home'
import Products from './components/products'
import Support from "./components/support";
import AboutUs from "./components/aboutUs";
import ProductPage from "./components/products/productPage";
  
function Main() {
  //fonts and icons import
  useEffect(()=>{
    WebFont.load({
        google:{
          families: ['Oswald', 'Material Icons','Montserrat']
        }
    })
  },[])
  //routes creation
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="products/:productId" element={<ProductPage/>}/>
      </Route>
    )
)
  return (
    <RouterProvider router={router}/>
  );
}

export default Main;
