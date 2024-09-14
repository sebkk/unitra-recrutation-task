'use client'

import React, { FC, ReactNode, useState } from 'react'
import { NextIntlClientProvider } from 'next-intl'

import enMessages from '../../../../messages/en.json'
import plMessages from '../../../../messages/pl.json'

interface ILocaleContext {
	defaultLocale: string
	handleChangeLocale: (value: string) => void
}

export const LocaleContext = React.createContext({} as ILocaleContext)

const LocaleProvider: FC<{ children: ReactNode; locale: string }> = ({
	locale,
	children,
}) => {
	const [defaultLocale, setDefaultLocale] = useState(locale)

	const messages = defaultLocale === 'pl' ? plMessages : enMessages

	const handleChangeLocale = (value: string) => setDefaultLocale(value)

	return (
		<LocaleContext.Provider value={{ defaultLocale, handleChangeLocale }}>
			<NextIntlClientProvider locale={defaultLocale} messages={messages}>
				{children}
			</NextIntlClientProvider>
		</LocaleContext.Provider>
	)
}

export default LocaleProvider
