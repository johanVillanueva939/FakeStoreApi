import React, { useState, useEffect } from 'react'
import SearchBarr from '../../UI/SearchBarr/SearchBarr'
import Cards from '../../UI/Cards/Cards'

const URL = 'https://fakestoreapi.com/products'

export const MainContainer = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            setProducts(data)
            setFilteredProducts(data) // Show all products initially
        }
        fetchProducts()
    }, [])

    const handleSearchResults = (results) => {
        setFilteredProducts(results)
    }

    return (
        <div>
            <SearchBarr onResults={handleSearchResults} products={products} />
            <Cards products={filteredProducts} />
        </div>
    )
}
export default MainContainer