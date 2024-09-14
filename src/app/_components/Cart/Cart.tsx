import React, { FC, useContext } from 'react'
import Image from 'next/image'

import { ProductsContext } from '@/_context/ProductsContext'
import cartPicture from '@/_pictures/shopping-cart.png'

import styles from './Cart.module.css'

const Cart: FC = () => {
	const { cartItems } = useContext(ProductsContext)

	return (
		<div className={styles['c-cart']}>
			<Image src={cartPicture} alt='cart icon' />
			<span className={styles['c-cart-count']}>
				{cartItems > 99 ? 99 : cartItems}
			</span>
		</div>
	)
}

export default Cart
