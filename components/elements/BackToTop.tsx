'use client'
import { useEffect, useState } from "react"

interface BackToTopProps {
	target: string // should be a valid CSS selector
}

export default function BackToTop({ target }: BackToTopProps) {
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setHasScrolled(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const handleClick = () => {
		const targetElement = document.querySelector(target) as HTMLElement | null
		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: 'smooth',
			})
		} else {
			console.error(`Element with target '${target}' not found`)
		}
	}

	return (
		<>
			{hasScrolled && (
				<div className="btn-scroll-top active-progress" onClick={handleClick}>
					<svg className="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
						<path d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z" />
					</svg>
				</div>
			)}
		</>
	)
}
