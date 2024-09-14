'use client'

import React, { FC } from 'react'
import { useTranslations } from 'next-intl'

import { Section } from '@/_components/Section'

import styles from './RecommendedProducts.module.css'
import { ProductItem } from './ProductItem'
import { IProductListItem } from '@/_types/products'

const products = Array.from({ length: 6 }).map((_, index) => ({
	title: `product ${index + 1}`,
	img: '',
}))

interface IRecommendedProductsProps {
	recommendedProducts: IProductListItem[]
}

const RecommendedProducts: FC<IRecommendedProductsProps> = ({
	recommendedProducts,
}) => {
	const t = useTranslations()

	return (
		<Section>
			<div className={styles['c-recommended-products']}>
				<h3 className={styles['c-recommended-products__title']}>
					{t('recommendedProducts')}
				</h3>
				<p>
					{t('foundProducts', {
						productsCount: products.length,
					})}
				</p>

				<ul className={styles['c-recommended-products__list']}>
					{recommendedProducts.map(item => (
						<ProductItem item={item} key={item.id} />
					))}
				</ul>
			</div>
		</Section>
	)
}

export default RecommendedProducts
