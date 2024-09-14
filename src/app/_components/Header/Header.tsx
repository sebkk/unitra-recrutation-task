'use client'

import React, { FC } from 'react'
import { useTranslations } from 'next-intl'

import { Cart } from '../Cart'
import styles from './Header.module.css'
import { LanguageSwitch } from '../LanguageSwitch'

const Header: FC = () => {
	const t = useTranslations()

	return (
		<header className={styles['c-header']}>
			<h2>{t('recrutationTask')}</h2>
			<div className={styles['c-header_end-side-wrapper']}>
				<LanguageSwitch />
				<Cart />
			</div>
		</header>
	)
}

export default Header
