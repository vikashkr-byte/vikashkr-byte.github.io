import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutMe from '../Pages/AboutMe'
import ContactUs from '../Pages/ContactUs'
import Home from '../Pages/Home'
import Portfolio from '../Pages/Portfolio'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/aboutme" element={<AboutMe/>}></Route>
    <Route path="/portfolio" element={<Portfolio/>}></Route>
    <Route path="/contact" element={<ContactUs/>}></Route>
   </Routes>
  )
}

export default AllRoutes