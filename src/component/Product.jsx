import React,{useState} from 'react';
import {ShoppingCartOutlined, FavoriteBorderOutlined, SearchOutlined} from '@material-ui/icons'

function Product({item}) {
  const[hoverEffect, setHoverEffect] = useState(' opacity-0')
  const iconStyle = 'w-[40px] h-[40px] rounded-full m-3 bg-white cursor-pointer flex  justify-center items-center hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'

  const handleHoverEnter = () => {
    setHoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2)]')
  }

  const handleHoverExist =() =>{
    setHoverEffect(' opacity-0')
  }
  return (
    <div className='flex  flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative   hover:scale-[1.1] ease-out duration-100' onMouseEnter={handleHoverEnter} onMouseLeave= {handleHoverExist}>
        <img src={item.src} alt="Top_product_image" />
        {/* Icons */}
        <div className={`flex justify-center items-center w-[100%] h-[100%] absolute ease-in duration-100  ` + hoverEffect}>
      <div className={ iconStyle }>
            <ShoppingCartOutlined />
        </div>
        <div className={ iconStyle } >
            <FavoriteBorderOutlined />
        </div>
        <div className={ iconStyle }>
            <SearchOutlined />
        </div>
        </div>
    </div>
  )
}

export default Product