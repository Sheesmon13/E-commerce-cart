import React from 'react'
import ProductCard from './ProductCard'

const Productgrid = () => {
  return (
    <div className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-black text-gray-900 mb-4'>Features Product</h2>
                <p className='text-lg text-gray-600'>Discover our excluisve range of products designed to enhance your lifestyle.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                <ProductCard />
            </div>
        </div>
    </div>
  )
}

export default Productgrid
