import React from 'react';
import   { ApiCategories }  from '../Apifolder/CategoriesApi';
import Catergory from './Catergory';

function Categories() {
  return (
    <div className='parentDiv flex justify-between items-center p-5 mobile:flex-col mobile:p-4 mobile:justify-center'>
        {
            ApiCategories.map((catergory, index) => {
                return <Catergory item={catergory} key={index} />
            })
        }
    </div>
  )
}

export default Categories