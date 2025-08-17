
import Link from "next/link"

export default function Contact1() {
	return (
		<>

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
									<h6 className="mb-0">contact@william.design</h6>
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

		</>
	)
}
