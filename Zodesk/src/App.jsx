import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import HeroImg from './component/HeroImg'
import Request from './component/Request'
import Contact from './component/Contact'
// import ProductDetails from './component/productDetails'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar/>
        <HeroImg/>
        <Request/>
        <Contact/>
        <Footer/>
        {/* <ProductDetails/> */}
      </div>
   
    </>
  )
}

export default App
