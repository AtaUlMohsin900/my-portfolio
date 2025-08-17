
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Pricing() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-pricing-1 pt-130 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-8">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											My Pricing
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											Affordable <span className="text-300">Solutions for Every</span> Budget
										</h3>
										<p className="text-300 fs-5 mb-0">
											Flexible Plans Tailored to Meet Your Unique Needs, Ensuring High-Quality Services <br />
											Without Breaking the Bank
										</p>
									</div>
									<div className="row mt-8 d-flex">
										<div className="col-md-6">
											<div className="card-pricing-1 p-6 rounded-4 h-100 d-flex flex-column">
												<span className="text-uppercase fs-7">basic</span> <br />
												<h3 className="ds-3 fw-medium text-primary mb-5">$49<span className="text-300 fs-4">/Hour</span></h3>
												<ul className="ps-3 border-top border-600 pt-5 mb-auto">
													<li>
														<p className="text-300">Require your wireframe</p>
													</li>
													<li>
														<p className="text-300">Design using Figma, Framer</p>
													</li>
													<li>
														<p className="text-300">Develop with Webflow, React, WordPress, Laravel/PHP</p>
													</li>
													<li>
														<p className="text-300">Remote/Online collaboration</p>
													</li>
													<li>
														<p className="text-300">Available on business days, no weekends</p>
													</li>
													<li>
														<p className="text-300">6 months of support</p>
													</li>
												</ul>
												<Link href="/#" className="btn btn-primary mt-5 w-100 justify-content-center">
													Order Now
													<i className="ri-arrow-right-up-line" />
												</Link>
											</div>
										</div>
										<div className="col-md-6">
											<div className="card-pricing-1 p-6 rounded-4 align-self-stretch mt-md-0 mt-6">
												<span className="text-uppercase fs-7">Business</span> <br />
												<h3 className="ds-3 fw-medium text-primary mb-5">$99<span className="text-300 fs-4">/Hour</span></h3>
												<ul className="ps-3 border-top border-600 pt-5">
													<li>
														<p className="text-300">No wireframe needed</p>
													</li>
													<li>
														<p className="text-300">Design using Figma, Framer</p>
													</li>
													<li>
														<p className="text-300">Develop with Webflow, React, WordPress, Laravel/PHP</p>
													</li>
													<li>
														<p className="text-300">Remote/Online collaboration</p>
													</li>
													<li>
														<p className="text-300">Available on business days, no weekends</p>
													</li>
													<li>
														<p className="text-300">12 months of support</p>
													</li>
													<li>
														<p className="text-300">Your project is always a priority</p>
													</li>
													<li>
														<p className="text-300">Customer care gifts included</p>
													</li>
												</ul>
												<Link href="/#" className="btn btn-primary mt-5 w-100 justify-content-center">
													Order Now
													<i className="ri-arrow-right-up-line" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row mt-8">
								<div className="col-lg-6  mx-md-auto text-center">
									<h2 className="text-300 mb-8">
										Common Questions
									</h2>
									<div className="accordion">
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseSevent">
													<p className="fs-5 mb-0 text-dark">What is the main focus of your portfolio?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseSevent" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseEight">
													<p className="fs-5 mb-0 text-dark">Will you include a blog or other written content?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseEight" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseNine">
													<p className="fs-5 mb-0 text-dark">How much do your services cost?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseNine" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseTen">
													<p className="fs-5 mb-0 text-dark">How long does it take to see results?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseTen" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseEleven">
													<p className="fs-5 mb-0 text-dark">Do you offer ongoing support?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseEleven" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseTwelve">
													<p className="fs-5 mb-0 text-dark">Do you work with businesses in my industry?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseTwelve" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
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