'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination',
	},
}

export default function Testimonials1() {
	return (
		<>

			<section className="section-testimonials-1 position-relative pt-120 pb-120 bg-900 overflow-hidden">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<h3 className="ds-3 mt-3 mb-3 text-primary">Client's Testimonials</h3>
							<span className="fs-5 fw-medium text-200">
								I believe that working hard and trying to learn every day will make me
								<br />
								improve in satisfying my customers.
							</span>
							<div className="row mt-8">
								<Swiper {...swiperOptions} className="swiper slider-2 pt-2 pb-3">
									<div className="swiper-wrapper">
										{/* prettier-ignore */}
										<SwiperSlide>
											<div className="bg-white card-testimonial-1 p-lg-7 p-md-5 mx-3 mx-md-0 p-4 border-2 rounded-4 position-relative">
												<div className="mb-6 logo">
													<img src="/assets/imgs/testimonials/testimonials-1/logo-1.png" alt="logo" />
												</div>
												<div className="d-flex mb-5">
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-500 " />
												</div>
												<h6 className="mb-7">“Working with William was an absolute pleasure. His attention to detail and user-focused design approach significantly improved our product's usability”</h6>
												<Link href="/#" className="d-flex align-items-center">
													<img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/avatar-1.png" alt="infinia" />
													<h6 className="ms-2 mb-0">John Doe <span className="fs-6 fw-regular"> - Head of Legal and Compliance, Tech Innovators</span></h6>
												</Link>
												<div className="position-absolute top-0 end-0 m-5">
													<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
														<g clipPath="url(#clip0_551_13914)">
															<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
															<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
														</g>
														<defs>
															<clipPath>
																<rect width={52} height={52} fill="white" />
															</clipPath>
														</defs>
													</svg>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="bg-white card-testimonial-1 p-lg-7 p-md-5 mx-3 mx-md-0 p-4 border-2 rounded-4 position-relative">
												<div className="mb-6 logo">
													<img src="/assets/imgs/testimonials/testimonials-1/logo-2.png" alt="logo" />
												</div>
												<div className="d-flex mb-5">
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-500 text-primary" />
												</div>
												<h6 className="mb-7">“Working with William was an absolute pleasure. His attention to detail and user-focused design approach significantly improved our product's usability”</h6>
												<Link href="/#text-primary" className="d-flex align-items-center">
													<img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/avatar-2.png" alt="infinia" />
													<h6 className="ms-2 mb-0">John Doe <span className="fs-6 fw-regular"> - Head of Legal and Compliance, Tech Innovators</span></h6>
												</Link>
												<div className="position-absolute top-0 end-0 m-5">
													<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
														<g clipPath="url(#clip0_551_13914)">
															<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
															<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
														</g>
														<defs>
															<clipPath>
																<rect width={52} height={52} fill="white" />
															</clipPath>
														</defs>
													</svg>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="bg-white card-testimonial-1 p-lg-7 p-md-5 mx-3 mx-md-0 p-4 border-2 rounded-4 position-relative">
												<div className="mb-6 logo">
													<img src="/assets/imgs/testimonials/testimonials-1/logo-1.png" alt="logo" />
												</div>
												<div className="d-flex mb-5">
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-500 " />
												</div>
												<h6 className="mb-7">“Working with William was an absolute pleasure. His attention to detail and user-focused design approach significantly improved our product's usability”</h6>
												<Link href="/#" className="d-flex align-items-center">
													<img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/avatar-1.png" alt="infinia" />
													<h6 className="ms-2 mb-0">John Doe <span className="fs-6 fw-regular"> - Head of Legal and Compliance, Tech Innovators</span></h6>
												</Link>
												<div className="position-absolute top-0 end-0 m-5">
													<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
														<g clipPath="url(#clip0_551_13914)">
															<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
															<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
														</g>
														<defs>
															<clipPath>
																<rect width={52} height={52} fill="white" />
															</clipPath>
														</defs>
													</svg>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="bg-white card-testimonial-1 p-lg-7 p-md-5 mx-3 mx-md-0 p-4 border-2 rounded-4 position-relative">
												<div className="mb-6 logo">
													<img src="/assets/imgs/testimonials/testimonials-1/logo-2.png" alt="logo" />
												</div>
												<div className="d-flex mb-5">
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-500 text-primary" />
												</div>
												<h6 className="mb-7">“Working with William was an absolute pleasure. His attention to detail and user-focused design approach significantly improved our product's usability”</h6>
												<Link href="/#text-primary" className="d-flex align-items-center">
													<img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/avatar-2.png" alt="infinia" />
													<h6 className="ms-2 mb-0">John Doe <span className="fs-6 fw-regular"> - Head of Legal and Compliance, Tech Innovators</span></h6>
												</Link>
												<div className="position-absolute top-0 end-0 m-5">
													<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
														<g clipPath="url(#clip0_551_13914)">
															<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
															<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
														</g>
														<defs>
															<clipPath>
																<rect width={52} height={52} fill="white" />
															</clipPath>
														</defs>
													</svg>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="bg-white card-testimonial-1 p-lg-7 p-md-5 mx-3 mx-md-0 p-4 border-2 rounded-4 position-relative">
												<div className="mb-6 logo">
													<img src="/assets/imgs/testimonials/testimonials-1/logo-1.png" alt="logo" />
												</div>
												<div className="d-flex mb-5">
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-500 " />
												</div>
												<h6 className="mb-7">“Working with William was an absolute pleasure. His attention to detail and user-focused design approach significantly improved our product's usability”</h6>
												<Link href="/#" className="d-flex align-items-center">
													<img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/avatar-1.png" alt="infinia" />
													<h6 className="ms-2 mb-0">John Doe <span className="fs-6 fw-regular"> - Head of Legal and Compliance, Tech Innovators</span></h6>
												</Link>
												<div className="position-absolute top-0 end-0 m-5">
													<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
														<g clipPath="url(#clip0_551_13914)">
															<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
															<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
														</g>
														<defs>
															<clipPath>
																<rect width={52} height={52} fill="white" />
															</clipPath>
														</defs>
													</svg>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="bg-white card-testimonial-1 p-lg-7 p-md-5 mx-3 mx-md-0 p-4 border-2 rounded-4 position-relative">
												<div className="mb-6 logo">
													<img src="/assets/imgs/testimonials/testimonials-1/logo-2.png" alt="logo" />
												</div>
												<div className="d-flex mb-5">
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-primary" />
													<i className="ri-star-fill fs-7 text-500 text-primary" />
												</div>
												<h6 className="mb-7">“Working with William was an absolute pleasure. His attention to detail and user-focused design approach significantly improved our product's usability”</h6>
												<Link href="/#text-primary" className="d-flex align-items-center">
													<img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/avatar-2.png" alt="infinia" />
													<h6 className="ms-2 mb-0">John Doe <span className="fs-6 fw-regular"> - Head of Legal and Compliance, Tech Innovators</span></h6>
												</Link>
												<div className="position-absolute top-0 end-0 m-5">
													<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
														<g clipPath="url(#clip0_551_13914)">
															<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
															<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
														</g>
														<defs>
															<clipPath>
																<rect width={52} height={52} fill="white" />
															</clipPath>
														</defs>
													</svg>
												</div>
											</div>
										</SwiperSlide>
									</div>
									<div className="swiper-pagination" />
									<div className="text-center mt-8 position-relative z-3">
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 ps-10 d-none d-md-block">
					<img className="position-relative z-1" src="/assets/imgs/testimonials/testimonials-1/man.png" alt="man" />
					<div className="position-absolute top-50 start-50 translate-middle z-0 mt-5">
						<img className="ribbonRotate" src="/assets/imgs/testimonials/testimonials-1/decorate.png" alt="" />
					</div>
				</div>
			</section>

		</>
	)
}
