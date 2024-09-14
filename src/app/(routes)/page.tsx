import { FC } from 'react'

import { Hero } from '@/_sections/Hero'
import { getAllProducts, getProduct } from '@/_api/products'
import { ProductDetails } from '@/_sections/ProductDetails'
import { RecommendedProducts } from '@/_sections/RecommendedProducts'

import styles from './page.module.css'

const Home: FC = async () => {
	const recommendedProducts = await getAllProducts({ limit: 6 })

	const productDetails = await getProduct(10)

	return (
		<div className={styles.page}>
			<Hero />
			<ProductDetails product={productDetails} />
			{recommendedProducts && (
				<RecommendedProducts recommendedProducts={recommendedProducts} />
			)}
		</div>
	)
}

export default Home
