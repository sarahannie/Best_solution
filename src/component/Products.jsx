import React from 'react';
import { ProductApi } from '../Apifolder/TopProductApi';
import Product from './Product';

function Products() {
  return (
    <div className='flex flex-wrap p-5 items-center justify-center'>
        {
          ProductApi.map((product, index) =>{
           return <Product  item={product} key={index} /> 
          })
        }
    </div>
  )
}

export default Products