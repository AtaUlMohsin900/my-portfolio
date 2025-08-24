import Link from 'next/link'

export default function Footer3() {
	return (
		<>
			<footer>
				<div className="section-footer-3 position-relative">
					<div className="container position-relative z-1 border-top border-secondary-3 pb-2 pt-4 px-lg-0">
						<div className="d-lg-flex justify-content-between align-items-center">
							<Link className="d-flex main-logo align-items-center justify-content-center ms-lg-0 ms-md-5 ms-3" href="/index-3">
								<h1 className="fs-28 mb-0 me-2">Meisa</h1>
								<img src="assets/imgs/home-page-3/template/favicon.svg" alt="ataulmohsin" />
							</Link>
							<div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
								<a href="#about" className="fs-6"> About me </a>
								<a href="#resume" className="fs-6"> Resume </a>
								<a href="#services" className="fs-6"> Services </a>
								<a href="#portfolio" className="fs-6"> Portfolio </a>
								<a href="#blog" className="fs-6"> Blog </a>
								<a href="#contact" className="fs-6"> Contact </a>
							</div>
							<div className="navbar-social d-flex justify-content-center gap-3">
								<a href="https://www.facebook.com/profile.php?id=61558336619926">
									<i className="ri-facebook-circle-fill fs-18" />
								</a>
								<a href="http://twitter.com">
									<i className="ri-twitter-x-fill fs-18" />
								</a>
								<a href="https://www.linkedin.com/in/ataul-mohsin-767159215/">
									<i className="ri-linkedin-fill fs-18" />
								</a>
								<a href="https://github.com/AtaUlMohsin900">
									<i className="ri-github-fill fs-18" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
