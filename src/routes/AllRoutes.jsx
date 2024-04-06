import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Admin, PageNotFound, Product, ProductDetails, 
  Shop, Contact, ContactIn, ContactEn } from '../pages/index';

const AllRoutes = () => {

  const user = true;

  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>
          <Route path="/contact" element={<Contact/>}>
            <Route path="in" element={<ContactIn/>}/>
            <Route path="en" element={<ContactEn/>}/>
          </Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/admin" element={user ? <Admin/> : <Navigate to="/"/>}></Route>
          <Route path="*" element={<PageNotFound title="404"/>}></Route>
        </Routes>
    </>
  )
}

export default AllRoutes