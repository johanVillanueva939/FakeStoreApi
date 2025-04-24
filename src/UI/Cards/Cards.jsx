import React from 'react'
import { useState } from 'react'
const URL = 'https://fakestoreapi.com/products'

export const Cards = () => {
    const [products] = useState([])
    return (
        <>
            <div className='grid grid-cols-4 gap-4'>
                {products.map((product) => (
                    <div key={product.id} className='border p-4 rounded-lg shadow-lg'>
                        <img src={product.image} alt={product.title} className='w-full h-48 object-cover mb-4' />
                        <h2 className='text-xl font-bold'>{product.title}</h2>
                        <p className='text-gray-700'>{product.description}</p>
                        <p className='text-lg font-semibold'>${product.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Cards