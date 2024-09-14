import React, { FC } from 'react'
import Image from 'next/image'

// import { Section } from '@/_components/Section'

import hero_image from '@/_pictures/hero_image.jpg'

import styles from './Hero.module.css'

const Hero: FC = () => {
	return (
		<section>
			<Image className={styles['c-hero']} src={hero_image} alt='hero image' />
		</section>
	)
}

export default Hero
