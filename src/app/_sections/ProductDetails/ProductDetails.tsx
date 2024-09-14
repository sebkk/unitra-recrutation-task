'use client'

import React, { FC, useContext } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css/navigation'
import 'swiper/css'

import { IProduct } from '@/_types/products'
import { Button } from '@/_components/Button'
import { Section } from '@/_components/Section'
import { ProductsContext } from '@/_context/ProductsContext'

import styles from './ProductDetails.module.css'

const ProductDetails: FC<{ product: IProduct }> = ({ product }) => {
	const { handleAddToCart } = useContext(ProductsContext)

	const t = useTranslations()

	const productPictures = [product.image, product.image, product.image]

	return (
		<Section>
			<div className={styles['c-product-details']}>
				<div className={styles['c-product-details__picture-wrapper']}>
					<Swiper
						modules={[Navigation]}
						spaceBetween={1.5}
						slidesPerView={1}
						navigation
					>
						{productPictures.map((picture, index) => (
							<SwiperSlide
								key={index}
								className={styles['c-product-details_swiper-slide']}
							>
								<Image
									src={picture}
									alt={product.title}
									width={300}
									height={300}
									className={styles['c-product-details__picture']}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className={styles['c-product-details__info-wrapper']}>
					<h4 className={styles['c-product-details__title']}>
						{product.title}
					</h4>
					<div>
						<p>{product.description}</p>
						<p className={styles['c-product-details__price']}>
							${product.price}
						</p>
					</div>
					<Button ariaLabel='Add product to cart' onClick={handleAddToCart}>
						{t('cartBtn')}
					</Button>
				</div>
			</div>
		</Section>
	)
}

export default ProductDetails
