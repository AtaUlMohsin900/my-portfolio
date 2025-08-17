
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Services() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-service-list pt-120 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											My Services
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											Transforming Ideas
											<span className="text-300">into Intuitive Designs for</span>
											Engaging User
											<span className="text-300">Experiences</span>
										</h3>
										<p className="text-300 fs-5">
											With expertise in mobile app and web design, I transform ideas into visually <br />
											stunning and user-friendly interfaces that captivate and retain users. <br />
											Explore my work and see design in action.
										</p>
									</div>
									<div className="card-scroll mt-8">
										<div className="cards">
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">UI/UX Design</h3>
															<p className="mb-0">Creative. Unique. Reality. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-1.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																User Research
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Conducting thorough user research through surveys, interviews, and usability studies to understand target audiences and their needs, ensuring designs are user-centric and effective.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Wireframing and Prototyping
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Designing detailed wireframes and interactive prototypes to visualize and test user flows and interactions, allowing for early feedback and iterative improvements.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																User Testing
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Implementing comprehensive user testing sessions to gather feedback, identify pain points, and make data-driven design improvements, ensuring a seamless user experience.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">Mobile App Design</h3>
															<p className="mb-0">Creative. Unique. Reality. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-2.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Cross-Platform Design
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Creating designs that work smoothly on both iOS and Android platforms, ensuring a consistent and high-quality user experience regardless of the device.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Interactive Prototypes
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Developing interactive prototypes to demonstrate app functionality allowing stakeholders to experience the app before development begins.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Consistent Branding
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Ensuring the app design is consistent with your brand’s identity and aesthetics, maintaining brand recognition and trust across all touchpoints.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">Brand Identity Design</h3>
															<p className="mb-0">Creative. Unique. Reality. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-3.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Logo Design
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Creating memorable and impactful logos that represent your brand’s essence and values, helping you stand out in a crowded marketplace.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Brand Guidelines
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Developing comprehensive brand guidelines that include typography, color visual styles to maintain consistency across all platforms and media.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Visual Assets:
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Designing a variety of visual assets, including business cards, letterheads, to ensure all brand communications are professional and cohesive.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">Web Development</h3>
															<p className="mb-0">Creative. Unique. Reality. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-4.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Front-End Development
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Utilizing modern technologies like HTML, CSS, and JavaScript to create responsive and interactive web pages that provide an engaging user experience.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Back-End Development
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Implementing server-side logic and database management with technologies such as Node.js, Python, or Ruby on Rails to ensure seamless performance and data integrity.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Content Management Systems
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Integrating user-friendly CMS platforms like WordPress, Drupal, or custom solutions for easy content updates, allowing non-technical users to manage website content efficiently.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
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
											<h6 className="mb-0">+1-234-567-8901</h6>
										</div>
										<Link href="/tel:+1-234-567-8901" className="position-absolute top-0 start-0 w-100 h-100" />
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
											<h6 className="mb-0">0811 Erdman Prairie, Joaville CA</h6>
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
								<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">william.design</h3>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}