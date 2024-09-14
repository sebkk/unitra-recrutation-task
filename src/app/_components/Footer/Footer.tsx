'use client'

import React, { FC } from 'react'
import { useTranslations } from 'next-intl'

import styles from './Footer.module.css'

const Footer: FC = () => {
	const t = useTranslations()

	return (
		<footer className={styles['c-footer']}>
			<p>{t('createdBy', { author: 'Sebastian Grabczak' })}</p>
		</footer>
	)
}

export default Footer
