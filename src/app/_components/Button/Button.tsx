import React, { FC, ReactNode } from 'react'

import styles from './Button.module.css'

interface IButtonProps {
	children: ReactNode
	onClick: () => void
	ariaLabel: string
}

const Button: FC<IButtonProps> = ({ children, onClick, ariaLabel }) => {
	return (
		<button
			className={styles['c-button']}
			onClick={onClick}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	)
}

export default Button
