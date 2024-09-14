'use client'

import React, { FC, ReactNode, useState } from 'react'

interface IProductsContext {
	handleAddToCart: () => void
	cartItems: number
}

export const ProductsContext = React.createContext({} as IProductsContext)

const ProductsProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [cartItems, setCartItems] = useState(0)

	const handleAddToCart = () => setCartItems(prev => prev + 1)

	return (
		<ProductsContext.Provider value={{ cartItems, handleAddToCart }}>
			{children}
		</ProductsContext.Provider>
	)
}

export default ProductsProvider
