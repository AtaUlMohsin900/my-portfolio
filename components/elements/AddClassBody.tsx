'use client'
import { usePathname } from 'next/navigation' // Corrected import path
import { useEffect } from 'react'

export default function AddClassBody() {
	const pathname = usePathname()

	useEffect(() => {
		const bodyElement = document.querySelector('body')

		if (bodyElement) {
			bodyElement.classList.remove('home-page-3', 'home-page-2')
			if (pathname === '/index-2') {
				bodyElement.classList.add('home-page-2')
			}
			if (pathname === '/index-3') {
				bodyElement.classList.add('home-page-3')
			}

		}
	}, [pathname])

	return null
}
