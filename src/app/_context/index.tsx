import React, { FC, ReactNode } from 'react'
import { getLocale } from 'next-intl/server'
import localFont from 'next/font/local'

import ProductsProvider from './ProductsContext'
import LocaleProvider from './LocaleContext'

const geistSans = localFont({
	src: '../_fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: '../_fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

const Providers: FC<{ children: ReactNode }> = async ({ children }) => {
	const locale = await getLocale()

	return (
		<html lang={locale}>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<LocaleProvider locale={locale}>
					<ProductsProvider>{children}</ProductsProvider>
				</LocaleProvider>
			</body>
		</html>
	)
}

export default Providers
