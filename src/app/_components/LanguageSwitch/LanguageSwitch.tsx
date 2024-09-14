import React, { FC, useContext } from 'react'
import { useTranslations } from 'next-intl'

import { LocaleContext } from '@/_context/LocaleContext'

import styles from './LanguageSwitch.module.css'

const LanguageSwitch: FC = () => {
	const { defaultLocale, handleChangeLocale } = useContext(LocaleContext)

	const t = useTranslations()

	return (
		<select
			name='language'
			defaultValue={defaultLocale}
			onChange={e => handleChangeLocale(e.target.value)}
			className={styles['c-language-switch']}
		>
			<option value='pl'>{t('polish')}</option>
			<option value='en'>{t('english')}</option>
		</select>
	)
}

export default LanguageSwitch
