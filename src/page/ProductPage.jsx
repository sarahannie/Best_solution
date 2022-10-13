import React from 'react'
import Annocement from '../component/Annocement'
import Counter from '../component/Counter'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newletter from '../component/Newletter'

function ProductPage() {
  return (
    <div>
        <Annocement />
        <Navbar />
        <div className='flex justify-center mobile:flex-col mobile:mt-3 mobile:p-3'>
            <div className='flex flex-1 item items-center justify-center'>
                <img 
                    src="https://m.media-amazon.com/images/I/51fXhZ-IzGL._SX260_.jpg" 
                    alt=""
                    className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'
                 />
            </div>
            <div className='flex-[1.3] flex justify-items-start items-start flex-col mt-10 mobile:items-center'>
                <h1 className='title text-[40px] mobile:text-[30px] mobile:font-bold'> Astronaut for a day </h1>
                <p className='pr-[4rem] text-justify mt-4 mobile:pr-0'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quos quae similique odit cupiditate consequuntur minus eum aut a laborum dolorem, modi mollitia recusandae iusto provident blanditiis repudiandae sunt culpa?
                </p>
                <p className='mt-7 text-3xl '>
                  Price: <b>$70</b>
                </p>

                {/* Color variety */}
                <div className='flex text-2xl mt-7'>
                  Colors
                  <div className='bg-red-600 rounded-full ml-5 w-[2rem] h-[2rem] border-2 p-[10px] cursor-pointer   hover:border-[#8a4af3]'></div>
                  <div className='bg-blue-600 rounded-full ml-5  w-[2rem] h-[2rem] p-[10px] border-2 hover:border-[#8a4af3]'></div>
                  <div className='bg-yellow-400 rounded-full ml-5  w-[2rem] h-[2rem] p-[10px] border-2 hover:border-[#8a4af3]'></div>
                </div>
                <div className='flex mt-7 text-2xl'>
                  Size
                  <select className='ml-5 border-2'>
                    <option selected disabled> Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
                <div className='mt-5'> <Counter/> </div>
                <button className='btn mt-5 mb-10'>Add to cart</button>
            </div>
        </div>
        <Newletter />
        <Footer />
    </div>
  )
}

export default ProductPage