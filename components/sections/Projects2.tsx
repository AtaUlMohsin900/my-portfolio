'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"



const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	// spaceBetween: 20,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

export default function Projects2() {
	return (
		<>

			<div className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Projects </span>
								</div>
								<h3>My Recent Works</h3>
								<div className="position-relative">
									<Swiper {...swiperOptions} className="swiper slider-two pb-3 position-relative">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100" src="assets/imgs/home-page-2/projects/img-1.png" alt="zelio" />
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Integrate AI into the <br />
																ecommerce system
															</h4>
															<p>Developed an online learning platform with course management, quizzes, and progress tracking.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Client</p>
																		<p className="text-300 mb-0 text-end">Conceptual JSC</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">6 months</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">Node.js, React, MongoDB, Stripe</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																<Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																		<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																	</svg>
																	Live Demo
																</Link>
																<Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
																		<path d="M12.001 2.5C6.47598 2.5 2.00098 6.975 2.00098 12.5C2.00098 16.925 4.86348 20.6625 8.83848 21.9875C9.33848 22.075 9.52598 21.775 9.52598 21.5125C9.52598 21.275 9.51348 20.4875 9.51348 19.65C7.00098 20.1125 6.35098 19.0375 6.15098 18.475C6.03848 18.1875 5.55098 17.3 5.12598 17.0625C4.77598 16.875 4.27598 16.4125 5.11348 16.4C5.90098 16.3875 6.46348 17.125 6.65098 17.425C7.55098 18.9375 8.98848 18.5125 9.56348 18.25C9.65098 17.6 9.91348 17.1625 10.201 16.9125C7.97598 16.6625 5.65098 15.8 5.65098 11.975C5.65098 10.8875 6.03848 9.9875 6.67598 9.2875C6.57598 9.0375 6.22598 8.0125 6.77598 6.6375C6.77598 6.6375 7.61348 6.375 9.52598 7.6625C10.326 7.4375 11.176 7.325 12.026 7.325C12.876 7.325 13.726 7.4375 14.526 7.6625C16.4385 6.3625 17.276 6.6375 17.276 6.6375C17.826 8.0125 17.476 9.0375 17.376 9.2875C18.0135 9.9875 18.401 10.875 18.401 11.975C18.401 15.8125 16.0635 16.6625 13.8385 16.9125C14.201 17.225 14.5135 17.825 14.5135 18.7625C14.5135 20.1 14.501 21.175 14.501 21.5125C14.501 21.775 14.6885 22.0875 15.1885 21.9875C19.259 20.6133 21.9999 16.7963 22.001 12.5C22.001 6.975 17.526 2.5 12.001 2.5Z" fill="#8F8F92" />
																	</svg>
																	View on Github
																</Link>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100" src="assets/imgs/home-page-2/projects/img-1.png" alt="zelio" />
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Integrate AI into the <br />
																ecommerce system
															</h4>
															<p>Developed an online learning platform with course management, quizzes, and progress tracking.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Client</p>
																		<p className="text-300 mb-0 text-end">Conceptual JSC</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">6 months</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">Node.js, React, MongoDB, Stripe</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																<Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																		<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																	</svg>
																	Live Demo
																</Link>
																<Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
																		<path d="M12.001 2.5C6.47598 2.5 2.00098 6.975 2.00098 12.5C2.00098 16.925 4.86348 20.6625 8.83848 21.9875C9.33848 22.075 9.52598 21.775 9.52598 21.5125C9.52598 21.275 9.51348 20.4875 9.51348 19.65C7.00098 20.1125 6.35098 19.0375 6.15098 18.475C6.03848 18.1875 5.55098 17.3 5.12598 17.0625C4.77598 16.875 4.27598 16.4125 5.11348 16.4C5.90098 16.3875 6.46348 17.125 6.65098 17.425C7.55098 18.9375 8.98848 18.5125 9.56348 18.25C9.65098 17.6 9.91348 17.1625 10.201 16.9125C7.97598 16.6625 5.65098 15.8 5.65098 11.975C5.65098 10.8875 6.03848 9.9875 6.67598 9.2875C6.57598 9.0375 6.22598 8.0125 6.77598 6.6375C6.77598 6.6375 7.61348 6.375 9.52598 7.6625C10.326 7.4375 11.176 7.325 12.026 7.325C12.876 7.325 13.726 7.4375 14.526 7.6625C16.4385 6.3625 17.276 6.6375 17.276 6.6375C17.826 8.0125 17.476 9.0375 17.376 9.2875C18.0135 9.9875 18.401 10.875 18.401 11.975C18.401 15.8125 16.0635 16.6625 13.8385 16.9125C14.201 17.225 14.5135 17.825 14.5135 18.7625C14.5135 20.1 14.501 21.175 14.501 21.5125C14.501 21.775 14.6885 22.0875 15.1885 21.9875C19.259 20.6133 21.9999 16.7963 22.001 12.5C22.001 6.975 17.526 2.5 12.001 2.5Z" fill="#8F8F92" />
																	</svg>
																	View on Github
																</Link>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
									<div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
										<div className="swiper-button-prev end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
											</svg>
										</div>
										<div className="swiper-button-next end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/projects/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
