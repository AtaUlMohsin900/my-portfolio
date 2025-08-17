'use client'
import { useEffect, useState } from "react"

export default function ThemeSwitch() {
	const [theme, setTheme] = useState<string>("dark")

	useEffect(() => {
		// Access localStorage only on the client-side
		const savedTheme = localStorage?.getItem("theme") || "dark"
		setTheme(savedTheme)
		document.documentElement.setAttribute("data-bs-theme", savedTheme)
	}, [])

	useEffect(() => {
		// Update localStorage and HTML tag when theme changes
		localStorage.setItem("theme", theme)
		document.documentElement.setAttribute("data-bs-theme", theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
	}

	return (
		<>
			<div
				className="dark-light-switcher pe-10 pe-lg-0 pe-0 ps-md-5 ps-0 ps-lg-4 pe-lg-4 d-flex justify-content-center align-items-center icon_80"
				onClick={toggleTheme}
				style={{ cursor: "pointer" }}
			>
				<i className={`bi theme-icon ${theme === "dark" ? "ri-sun-line text-warning" : "ri-contrast-2-line text-white"}`} />
			</div>

			
		</>
	)
}
