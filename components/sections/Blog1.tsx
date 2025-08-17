
import Link from "next/link"

export default function Blog1() {
	return (
		<>

			<section className="section-blog-1 position-relative pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary">Recent blog</h3>
							<span className="fs-5 fw-medium text-200"> Explore the insights and trends shaping our industry </span>
						</div>
						<div className="col-lg-auto">
							<Link href="/blog-list" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								View more
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-8">
						<div className="col-lg-4">
							<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
								<div className="blog-card__image position-relative">
									<div className="zoom-img rounded-3 overflow-hidden">
										<img className="w-100" src="/assets/imgs/blog/blog-1/img-1.png" alt="" />
										<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">App Design</Link>
										<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
											<i className="ri-arrow-right-up-line text-dark" />
										</Link>
									</div>
								</div>
								<div className="blog-card__content position-relative text-center mt-4">
									<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
									<h5 className="blog-card__title">5 UI/UX Trends to Watch in 2024</h5>
									<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
									<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
								<div className="blog-card__image position-relative">
									<div className="zoom-img rounded-3 overflow-hidden">
										<img className="w-100" src="/assets/imgs/blog/blog-1/img-2.png" alt="" />
										<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Branding</Link>
										<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
											<i className="ri-arrow-right-up-line text-dark" />
										</Link>
									</div>
								</div>
								<div className="blog-card__content position-relative text-center mt-4">
									<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
									<h5 className="blog-card__title">The Importance of User Research</h5>
									<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
									<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
								<div className="blog-card__image position-relative">
									<div className="zoom-img rounded-3 overflow-hidden">
										<img className="w-100" src="/assets/imgs/blog/blog-1/img-3.png" alt="" />
										<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Mockup</Link>
										<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
											<i className="ri-arrow-right-up-line text-dark" />
										</Link>
									</div>
								</div>
								<div className="blog-card__content position-relative text-center mt-4">
									<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
									<h5 className="blog-card__title">The Role of Color Psychology</h5>
									<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
									<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
