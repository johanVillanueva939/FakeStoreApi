import React from 'react'
import './Cards.css'

export const Cards = ({ products }) => {
    return (
        <>
            <div className='flex flex-wrap gap-4 justify-center '>
                {products.map((product) => (
                    <div key={product.id} className='divCard card_neomorfism w-fit text-[var(--color_items) flex flex-col h-fit justify-center items-center text-center gap-2.5' >
                        <img src={product.image} alt={product.title} className='imgCard object-contain rounded-[20px]' />
                        <h2 className='h2div text-[30px] font-bold text-[var(--color_items)]'>{product.title}</h2>
                        <p className='descDiv text-white'>{product.description}</p>
                        <p className='text-3xl font-semibold text-[var(--color_items_mid_dark)]'>${product.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Cards