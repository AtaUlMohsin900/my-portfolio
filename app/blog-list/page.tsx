
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogList() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-blog-list pt-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-lg-0">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											Recent blog
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-300">
											Explore the <span className="text-dark">insights and trends shaping</span> our industry
										</h3>
										<p className="text-300 fs-5 mb-0">
											Discover key insights and emerging trends shaping the future of design: a detailed <br />
											examination of how these innovations are reshaping our industry
										</p>
									</div>
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
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-4.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Branding</Link>
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
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-5.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Mockup</Link>
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
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-6.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">App Design</Link>
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
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-7.png" alt="" />
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
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-8.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Mockup</Link>
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
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-9.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Branding</Link>
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
					<div className="container">
						<div className="row py-120">
							<div className="d-flex justify-content-center align-items-center">
								<nav aria-label="Page navigation example">
									<ul className="pagination gap-2">
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#" aria-label="Previous">
												<i className="ri-arrow-left-line" />
											</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">1</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">2</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">3</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#" aria-label="Next">
												<i className="ri-arrow-right-line" />
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					{/*Static 1*/}
					<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
						<div className="container">
							<div className="inner">
								<div className="row align-items-center justify-content-between">
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">12</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Year of</p>
													<p className="fs-5 mb-0 fw-bold">Experience</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">250</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Projects</p>
													<p className="fs-5 mb-0 fw-bold">Completed</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">680</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Satisfied</p>
													<p className="fs-5 mb-0 fw-bold">Happy Clients</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">18</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Awards</p>
													<p className="fs-5 mb-0 fw-bold">Won Received</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Contact 1*/}
					<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
						<div className="container position-relative z-1">
							<h3 className="ds-3 mt-3 mb-3 text-primary">Get in touch</h3>
							<span className="fs-5 fw-medium text-200">
								I'm always excited to take on new projects and collaborate with innovative minds. If you
								<br />
								have a project in mind or just want to chat about design, feel free to reach out!
							</span>
							<div className="row mt-8">
								<div className="col-lg-4 d-flex flex-column">
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-phone-fill text-primary fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Phone Number</span>
											<h6 className="mb-0">+92-314-601-2991</h6>
										</div>
										<Link href="/tel:+92-314-601-2991" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-mail-fill text-primary fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Email</span>
											<h6 className="mb-0">ataulmohsin900@gmail.com</h6>
										</div>
										<Link href="/mailto:someone@example.com" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-skype-fill text-primary fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Skype</span>
											<h6 className="mb-0">Ataul Mohsin</h6>
										</div>
										<Link href="/skype:SKYPENAME?add" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-map-2-fill text-primary fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Address</span>
											<h6 className="mb-0">ZTBL Head Office, G-7 Islamabad PK</h6>
										</div>
										<Link href="/https://maps.google.com/maps?q=1st+avenue,New+York" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
								</div>
								<div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
									<div className="position-relative">
										<div className="position-relative z-2">
											<h3>Leave a messge</h3>
											<form action="#">
												<div className="row mt-3">
													<div className="col-md-6 ">
														<label className="mb-1 mt-3 text-dark" htmlFor="name">Your name <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="John Doe" aria-label="username" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="email">Email address <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="email" name="email" placeholder="contact.john@gmail.com" aria-label="email" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="phone">Your phone <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="+01 234 567 89" aria-label="phone" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="subject">Subject <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="I want to contact for...." aria-label="subject" />
													</div>
													<div className="col-12">
														<label className="mb-1 mt-3 text-dark" htmlFor="message">Message <span className="text-primary">*</span></label>
														<textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder="Your message here...." aria-label="With textarea" />
													</div>
													<div className="col-12">
														<button type="submit" className="btn btn-gradient mt-3">
															Send Message
															<i className="ri-arrow-right-up-line" />
														</button>
													</div>
												</div>
											</form>
										</div>
										<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
									</div>
								</div>
							</div>
						</div>
						<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
							<div className="wow img-custom-anim-top">
								<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">ataulmohsin</h3>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}