import { Badge } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import {ShoppingCartOutlined} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import React from 'react'


function Navbar() {
  const style = 'text-[14px] cursor-pointer ml-[25px] mobile:ml-[5px] mobile:text-[10px]'
  return (
    <div className='navbar h-[60px] shadow-md border-[rgba(29,26,26,0.2)] relative z-10'>
        <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0'>
          {/* searchInput */}
            <div className='left flex flex-1 items-center'>
              <div className='language  cursor- text-[16px] mobile:hidden'>En</div>
              <div className='searchInput flex border-[2px] border-solid border-lightgrey rounded-md  items-center ml-[10px] p-[5x]  focus-within:border-[#8a4af3]  transition-all '>
                <input  className='input outline-none mobile:w-[50px]'
                type='text'/>
                <Search className='' style={{ fontSize:'16px'}}/>
                
              </div>
            </div>
            {/* Logo */}
            <div className='center flex-1 text-center'>
              <div className='logo font-bold text-lg mobile:text-[10px]'><Link to='/'>BEST SOLUTION</Link> </div>
            </div>
            {/* content-page */}
          
            <div className='right flex flex-1 items-center justify-end mobile:flex-[1.5] mobile:justify-center'>
              <div className={style}>
               <Link to='/product'>Product</Link> 
             </div>
              <div className={style}>
               <Link to='/login'>Login</Link> 
             </div>
              <div className={style}>
               <Link to='/Register'>Register</Link> 
             </div>
              <div className={style}>
              <Link to='/cart'>
                <Badge badgeContent={2} color='primary'>
                  <ShoppingCartOutlined />
                </Badge>
              </Link> 
             </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar