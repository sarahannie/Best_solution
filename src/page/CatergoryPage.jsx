import React from 'react'
import Annocement from '../component/Annocement'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newletter from '../component/Newletter'
import Products from '../component/Products'

function CatergoryPage() {
  return (
    <div>
        <Annocement/>
        <Navbar />
        <div className='flex flex-col p-5'>
          <h1 className='text-[30px] font-bold flex justify-center items-center'> Children Books</h1>
          <div className='flex items-center justify-between mt-3'>
            <div className='flex'>
              <p className='mobile:text-sm mt-1'>Filter by</p>
              <select className=' ml-3 border-2 border-sliver'>
                <option selected disabled>Age</option>
                <option>0-2</option>
                <option>3-5</option>
                <option>5-7</option>
                <option>7-10</option>
              </select>
              <select className=' ml-3 border-2 border-sliver'>
                <option selected disabled>Color</option>
                <option>Yellow</option>
                <option>blue</option>
                <option>black</option>
              </select>
            </div>
            <div className='flex'>
              <p className='mobile:text-sm  mt-1'> Sort by</p>
              <select className=' ml-3 border-2 border-sliver'>
                <option>Newset </option>
                <option>Oldest </option>
                <option>Price </option>
                <option>Price </option>
              </select>
            </div>
          </div>
        </div>
        <Products />
        <Newletter />
        <Footer />
    </div>
  )
}

export default CatergoryPage