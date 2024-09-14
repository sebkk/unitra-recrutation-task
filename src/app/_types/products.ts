export interface IProduct {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: {
		rate: number
		count: number
	}
}

export interface IProductListItem {
	title: string
	picture: string
	price: number
	id: number
}
