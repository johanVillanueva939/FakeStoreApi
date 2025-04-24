import React, { useState } from 'react'
import './SearchBarr.css'

export const SearchBarr = ({ onResults, products }) => {
    const [query, setQuery] = useState('')

    const handleSearch = (e) => {
        const searchQuery = e.target.value
        setQuery(searchQuery)

        if (!searchQuery.trim()) {
            onResults(products) // Muestra todos los productos si no hay búsqueda
            return
        }

        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        onResults(filteredProducts)
    }

    return (
        <div className="mb-4">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search products..."
                className="SearchBarr card_neomorfism placeholder:text-[var(--color_items_mid_dark)] text-[var(--color_items)] outline-none"
            />
        </div>
    )
}

export default SearchBarr
