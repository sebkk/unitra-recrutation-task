import { FC } from 'react'
import type { Metadata } from 'next'

import { Header } from '@/_components/Header'
import { Footer } from '@/_components/Footer'

import '../globals.css'

import Providers from '@/_context'

export const metadata: Metadata = {
	title: 'Unitra Recrutation Task',
	description: 'App created as recrutation project for Unitra company',
}

const RootLayout: FC<{
	children: React.ReactNode
}> = ({ children }) => {
	return (
		<Providers>
			<Header />
			<main>{children}</main>
			<Footer />
		</Providers>
	)
}

export default RootLayout
