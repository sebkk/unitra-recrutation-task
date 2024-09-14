import React, { FC, ReactNode } from 'react'

import styles from './Section.module.css'

const Section: FC<{ children: ReactNode }> = ({ children }) => {
	return <section className={styles['c-section']}>{children}</section>
}

export default Section
