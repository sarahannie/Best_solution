import { EmailOutlined, Facebook, Instagram,  LocationOnOutlined,  PhoneOutlined,  Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'

function Footer() {
    const socialStyle =  ' m-3 rounded-full p-2 text-white cursor-pointer '
  return (
    <div className='flex items-center justify-around p-2 mobile:flex-col mobile:items-start'>
        <div className='flex flex-1 flex-col flex-wrap p-2'>
            {/* Store Information */}
            <h1 className='text-[25px]'>ModelclicCode</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugiat, harum id ullam atque ipsam reprehenderit, dicta distinctio eaque ex quisquam quas, a sunt deserunt hic impedit expedita minus quia.
            </p>
            <div className='flex items-center justify-center mt-3 self-start'>
                <div className= {socialStyle + ' bg-blue-700'}>
                    <Facebook /> 
                </div>
                <div className= {socialStyle + ' bg-orange-500'}>
                    <Instagram />
                </div>
                <div className= {socialStyle + ' bg-sky-400'}>
                    <Twitter />
                </div>
                <div className= {socialStyle + ' bg-red-600'}>
                    <Pinterest />
                </div>
            </div>
        </div>
        <div className='flex flex-1 flex-col p-2'>
            <div className=' flex m-3'>
                <LocationOnOutlined />
                <p className='pl-3'>State of California</p>
            </div>
            <div className=' flex m-3'>
                <PhoneOutlined />
                <p className='pl-3'>+234 8034 739 065</p>
            </div>
            <div className=' flex m-3'>
                <EmailOutlined />
                <p className='pl-3'>modelclic@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer