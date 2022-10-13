import React from 'react'
import Annocement from '../component/Annocement'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newletter from '../component/Newletter';
import Counter from '../component/Counter';

function Cart() {
  return (
    <div>
        <Annocement />
        <Navbar />
        <div className='p-5' >
            <div className='flex justify-center text-5xl '>
                Cart
            </div>
            <div className='flex justify-between items-center mt-4  mobile:flex-col mobile:p-4'>
                <button className='btn bg-white text-[#8a4af3] border-2   border-[#8a4af3] hover:bg-white'>Continue Shopping</button>
                <div className='flex underline text-lg hover:cursor-pointer mobile:mt-3 mobile:mb-3'>
                    <p> Item in the Cart : 3</p>
                    <p className='pl-5'> Whitlist Item : 0 </p>
                </div>
                <button className='btn border-none'> Checkout</button>
            </div>
            {/* Center div */}
            <div className='flex mt-7 mobile:flex-col'>
                <div className='flex flex-col flex-1 '>
                    {/* List of Product Div */}
                    <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
                        <div className='product flex self-start pl-5'>
                            <img src="https://m.media-amazon.com/images/I/61F979h7l7L._SX260_.jpg" alt="product_img"
                            className='w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in  duration-300' />
                        
                        <div className='description flex flex-col ml-5 h-auto justify-between'>
                             <p> <b>ID: </b> 12345666</p>
                             <p> <b>Product: </b> Being a princess in need</p>
                             <p className='flex '> <b>Color: </b> 
                                <div className='rounded-full border-2 p-[10px] bg-purple-300 ml-3 w-[20px] h-[20px ] '></div>
                             </p>
                             <p> <b>Size: </b> </p>
                        </div>
                        </div>
                        <div className=' flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                            <Counter />
                            <p className='flex flex-col justify-centeritems-center text-3xl mt-3'>
                                <b>$70</b>
                            </p>
                        </div>
                    </div>
                    <hr className='mt-7 mb-7 '></hr>
                    {/* 2nd product */}
                    <div className='flex w-[100%] h-auto items-center  mobile:flex-col'>
                        <div className='product flex self-start pl-5'>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/51n+ggWzcjL._SX258_BO1,204,203,200_.jpg" alt="product_img"
                            className='w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in  duration-300' />
                        
                        <div className='description flex flex-col ml-5 h-auto justify-between'>
                             <p> <b>ID: </b> 12345666</p>
                             <p> <b>Product: </b> Being a princess in need</p>
                             <p className='flex '> <b>Color: </b> 
                                <div className='rounded-full border-2 p-[10px] bg-sky-500  ml-3 w-[20px] h-[20px] '></div>
                             </p>
                             <p> <b>Size: </b> </p>
                        </div>
                        </div>
                        <div className=' flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                            <Counter />
                            <p className='flex flex-col justify-centeritems-center text-3xl mt-3'>
                                <b>$70</b>
                            </p>
                        </div>
                    </div>
                    <hr className='mt-7 mb-7 '></hr>
                </div>
                
                <div className=' p-5  flex-[0.4] w-auto  flex  flex-col items-center  h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg'>
                    <h1 className='text-2xl'> Summary </h1>
                    <div className='flex justify-between w-[100%]  mt-3'>
                        <p>subtotal:</p>
                        <p>$140</p>
                    </div>
                    <div  className='flex justify-between w-[100%]  mt-3'>
                        <p>Shipping</p>
                        <p>$40</p>
                    </div>
                    <div  className='flex justify-between w-[100%]  mt-3'>
                        <p>Shipping</p>
                        <p>$40</p>
                    </div>
                    <div  className='flex justify-between w-[100%]  mt-3 text-3xl font-bold  '>
                        <p>Total</p>
                        <p>$140</p>
                    </div>
                </div>
            </div>
        </div>
        <Newletter />
        <Footer/>
    </div>
  )
}

export default Cart