import React from 'react'

const ProductCategory = ({image, name}) => {
  return (
    <>
    <div className='flex items-center justify-center gap-1 group hover:transition-all cursor-pointer'>
       <img src= {image} className='h-5 opacity-90 group-hover:opacity-100'></img>
      <p className='paragraph-text cursor-pointer group-hover:text-[#926A59] font-normal'>{name}</p>
    </div>
     
    </>
  )
}

export default ProductCategory