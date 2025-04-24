import React from 'react'
import './Cards.css'

export const Cards = ({ products }) => {
    return (
        <>
            <div className='grid grid-cols-4 gap-4'>
                {products.map((product) => (
                    <div key={product.id} className='divCard card_neomorfism text-[var(--color_items) flex flex-col h-fit justify-center items-center text-center gap-2.5' >
                        <img src={product.image} alt={product.title} className='imgCard w-full object-contain' />
                        <h2 className='text-[30px] font-bold text-[var(--color_items)]'>{product.title}</h2>
                        <p className=' text-white'>{product.description}</p>
                        <p className='text-3xl font-semibold text-[var(--color_items_mid_dark)]'>${product.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Cards