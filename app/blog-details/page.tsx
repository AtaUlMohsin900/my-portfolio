
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogDetails() {

	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-details pt-130 pb-100">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-8">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase"> Design trend </Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">How to Create a Seamless Mobile Experience</h3>
										<p className="text-300 fs-5 mb-0">
											A great mobile experience can significantly enhance user satisfaction, increase <br />
											engagement, and boost your app's success. Here’s a comprehensive guide to help you <br />
											create a seamless mobile experience for your users.
										</p>
									</div>
								</div>
								<img src="/assets/imgs/blog/blog-1/img-background.png" alt="" />
								<div className="col-lg-10 mx-lg-auto mt-8">
									<div className="row">
										<div className="col-lg-9">
											<h5>Prioritize User-Centric Design</h5>
											<h5 className="fs-5 fw-medium">Understand Your Users</h5>
											<p className="text-300">Conduct thorough user research to understand your target audience’s needs, preferences, and pain points. Use surveys, interviews, and usability testing to gather valuable insights.</p>
											<h5 className="fs-5 fw-medium">Simplify Navigation</h5>
											<p className="text-300">Design a clean and intuitive navigation structure. Ensure users can easily find what they’re looking for without feeling overwhelmed. Use familiar icons and clear labels to guide them.</p>
											<h5 className="mt-6">Optimize Performance</h5>
											<h5 className="fs-5 fw-medium">Fast Loading Times</h5>
											<p className="text-300">Optimize your app to load quickly. Users expect instant gratification, and slow load times can lead to frustration and app abandonment. Use efficient coding practices and minimize the use of heavy graphics.</p>
											<h5 className="fs-5 fw-medium">Smooth Animations</h5>
											<p className="text-300">Ensure animations and transitions are smooth and do not hinder the app’s performance. Well-executed animations can enhance the user experience by providing visual feedback and making interactions feel natural.</p>
											<h5 className="fs-5 fw-medium">Offline Access</h5>
											<p className="text-300">Provide offline capabilities for essential features. Allowing users to access certain functionalities without an internet connection can greatly improve their experience, especially in areas with poor connectivity.</p>
											<div className="d-flex align-items-center my-6">
												<img src="/assets/imgs/blog/blog-1/img-10.png" alt="" />
												<div className="d-md-flex flex-column d-none gap-3 ms-3">
													<img src="/assets/imgs/blog/blog-1/img-11.png" alt="" />
													<img src="/assets/imgs/blog/blog-1/img-12.png" alt="" />
												</div>
											</div>
											<h5>Ensure Robust Security</h5>
											<h5 className="fs-5 fw-medium">Data Protection</h5>
											<p className="text-300">Implement strong security measures to protect user data. Use encryption, secure authentication methods, and regular security audits to safeguard sensitive information.</p>
											<h5 className="fs-5 fw-medium">Transparent Policies</h5>
											<p className="text-300">Be transparent about your data collection and usage policies. Provide users with clear information about how their data is used and give them control over their privacy settings.</p>
											<h5 className="fs-5 fw-medium">Regular Updates</h5>
											<p className="text-300">Keep your app updated with the latest security patches and improvements. Regular updates not only enhance security but also show users that you are actively maintaining and improving the app.</p>
											<div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-6">
												<h4>Conclusion</h4>
												<p className="text-300 mt-4">Creating a seamless mobile experience requires a user-centric approach, performance optimization, responsive design, user engagement strategies, and robust security measures. By focusing on these key areas, you can build a mobile app that not only meets user expectations but also stands out in the competitive app market. Remember, a great mobile experience can turn users into loyal advocates, driving the success of your app.</p>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-8">
											<div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-lg-0 mt-4">
												<div className="d-flex align-items-center mb-3">
													<i className="ri-time-line fs-6" />
													<span className="ms-2 fs-6">16 mins to read</span>
												</div>
												<div className="d-flex align-items-center mb-3">
													<i className="ri-calendar-schedule-line fs-6" />
													<span className="ms-2 fs-6">Nov 21, 2024</span>
												</div>
												<div className="d-flex align-items-center mb-3">
													<i className="ri-user-line fs-6" />
													<span className="ms-2 fs-6">By <Link className="fw-bold" href="/#">Alonso</Link></span>
												</div>
											</div>
											<div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-4">
												<span className="text-uppercase fs-7">Share</span> <br />
												<div className="d-flex gap-3 pt-3">
													<Link href="/#" className="text-decoration-none">
														<i className="ri-facebook-circle-fill fs-18" />
													</Link>
													<Link href="/#" className="text-decoration-none">
														<i className="ri-twitter-x-fill fs-18" />
													</Link>
													<Link href="/#" className="text-decoration-none">
														<i className="ri-instagram-fill fs-5" />
													</Link>
													<Link href="/#" className="text-decoration-none">
														<i className="ri-pinterest-fill fs-5" />
													</Link>
													<Link href="/#" className="text-decoration-none">
														<i className="ri-google-fill fs-5" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* blog list */}
					<section className="section-blog-list">
						<div className="container border-top pt-80 pb-80">
							<div className="row">
								<div className="d-md-flex align-items-center">
									<h1 className="text-300">Related posts</h1>
									<Link href="/#" className="btn btn-gradient ms-auto">
										View more
										<i className="ri-arrow-right-line" />
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
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">App Design</Link>
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