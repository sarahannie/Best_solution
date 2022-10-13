import { Send } from '@material-ui/icons'
import React from 'react'

function Newletter() {
  return (
    <div className='flex flex-col justify-center items-center h-[350px] w-[100%] bg-[#c4a4f9] '>
        <h1 className='text-[50px] font-bold'>NEWSLETTERS</h1>
        <h2 className='text-[20px] mobile:pl-3 mobile:text-center '> Always get in touch with us for your favourite stories</h2>
        <div className='flex mt-[3rem] items-center justify-between min-h-[2rem] min-w-[30rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]'>
            <input 
                type='text'
                placeholder='Email'
                className='border-none outline-none pl-[20px] flex-[7]'
            />
            <button className='bg-[#4caf50] flex-1 h-[100%]'>
                <Send className='text-white' />
            </button>
        </div>
    </div>
  )
}

export default Newletter