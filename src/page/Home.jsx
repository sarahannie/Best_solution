import React from 'react'
import Annocement from '../component/Annocement'
import Categories from '../component/Categories'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newletter from '../component/Newletter'
import Products from '../component/Products'
import Slider from '../component/slider'

function Home() {
  return (
    <div>
        <Annocement/>
        <Navbar/>
        <Slider/>
        <Categories />
        <Products />
        <Newletter />
        <Footer />
    </div>
  )
}

export default Home