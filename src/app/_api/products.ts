import { IProduct, IProductListItem } from '@/_types/products'
import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com/products'

export const getAllProducts = async ({
	limit,
}: {
	limit: number
}): Promise<IProductListItem[] | undefined> => {
	try {
		const res = await axios.get(BASE_URL, { params: { limit } })

		return res.data.map((item: IProduct) => ({
			title: item.title,
			picture: item.image,
			price: item.price,
			id: item.id,
		}))
	} catch (err) {
		console.error(err)
	}
}

export const getProduct = async (productId: number) => {
	try {
		const res = await axios.get(`${BASE_URL}/${productId}`)

		return res.data
	} catch (err) {
		console.error(err)
	}
}
