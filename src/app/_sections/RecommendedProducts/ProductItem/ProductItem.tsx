import React, { FC } from 'react'

import { IProductListItem } from '@/_types/products'

import styles from './ProductItem.module.css'
import Image from 'next/image'

interface IProductItemProps {
	item: IProductListItem
}

const ProductItem: FC<IProductItemProps> = ({ item }) => {
	return (
		<li className={styles['c-product-item']}>
			<Image
				className={styles['c-product-item__picture']}
				src={item.picture}
				alt={item.title}
				width={400}
				height={500}
			/>
			<h5 className={styles['c-product-item__title']}>{item.title}</h5>
			<p className={styles['c-product-item__price']}>${item.price}</p>
		</li>
	)
}

export default ProductItem
