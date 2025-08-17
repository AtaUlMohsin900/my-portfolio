import ThemeSwitch from '@/components/elements/ThemeSwitch'
import Link from 'next/link'
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'
import OffCanvas from '../OffCanvas'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			<header>
				<nav className={`navbar navbar-expand-lg navbar-light w-100 flex-nowrap z-999 p-0 ${scroll ? 'navbar-stick' : ''}`} style={{ position: `${scroll ? "fixed" : "relative"}`, top: `${scroll ? "0" : "auto"}` }}>
					<Link href="/#" className="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex" data-bs-target=".offCanvas__info" aria-controls="offCanvas__info" onClick={handleOffCanvas}>
						<i className="ri-menu-2-line" />
					</Link>
					<div className="container py-3 px-0">
						<Link className="navbar-brand d-flex main-logo align-items-center ms-lg-0 ms-md-5 ms-3" href="/">
							<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
							<span className="fs-4 ms-2">william.design</span>
						</Link>
						<div className="d-none d-lg-flex">
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<Menu />
							</div>
						</div>
						<div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
							<div className="d-md-flex d-none gap-3">
								<Link href="/http://facebook.com">
									<i className="ri-facebook-circle-fill fs-18" />
								</Link>
								<Link href="/http://twitter.com">
									<i className="ri-twitter-x-fill fs-18" />
								</Link>
								<Link href="/http://linkedin.com">
									<i className="ri-linkedin-fill fs-18" />
								</Link>
								<Link href="/http://github.com">
									<i className="ri-github-fill fs-18" />
								</Link>
							</div>
							<div className="burger-icon burger-icon-white border rounded-3" onClick={handleMobileMenu}>
								<span className="burger-icon-top" />
								<span className="burger-icon-mid" />
								<span className="burger-icon-bottom" />
							</div>
						</div>
					</div>
					<ThemeSwitch />

				</nav>
				{/* offCanvas-menu */}
				<OffCanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
				<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
			</header>

		</>
	)
}
