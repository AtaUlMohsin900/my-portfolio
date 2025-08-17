
import Link from "next/link"

export default function Resume1() {
	return (
		<>

			<section id="resume" className="section-resume-1 position-relative pt-150 overflow-hidden" data-background="assets/imgs/projects/projects-1/background.png">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary">My Resume</h3>
							<span className="fs-5 fw-medium text-200">
								I believe that working hard and trying to learn every day will
								<br />
								make me improve in satisfying my customers.
							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Get in touch
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-6">
						<div className="col-lg-6 col-12">
							<div className="resume-card p-lg-6 p-4 mb-lg-0 mb-6">
								<div className="resume-card-header d-flex align-items-end">
									<img className="border-linear-1 border-3 pb-2 pe-2" src="/assets/imgs/resume/resume-1/icon-1.svg" alt="" />
									<h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Education</h3>
								</div>
								<div className="resume-card-body">
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">2018-2019</p>
												<h5>Certification in UX Design</h5>
												<p className="text-300 mb-0">University of Stanford</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold">4.9<span className="fs-4 fw-bold">/5</span></h3>
										</div>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">2017-2018</p>
												<h5>Certification in Web Dev</h5>
												<p className="text-300 mb-0">University of Stanford</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold">5.0<span className="fs-4 fw-bold">/5</span></h3>
										</div>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">2014-2016</p>
												<h5>Advanced UX/UI Bootcamp</h5>
												<p className="text-300 mb-0">Design Academy</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold">4.9<span className="fs-4 fw-bold">/5</span></h3>
										</div>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">2012-2013</p>
												<h5>Certification in Graphic Design</h5>
												<p className="text-300 mb-0">Coursera</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold">4.8<span className="fs-4 fw-bold">/5</span></h3>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="resume-card p-lg-6 p-4 h-100">
								<div className="resume-card-header d-flex align-items-end">
									<img className="border-linear-1 border-3 pb-2 pe-2" src="/assets/imgs/resume/resume-1/icon-2.svg" alt="" />
									<h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Experience</h3>
								</div>
								<div className="resume-card-body">
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">2019 - Present</p>
										<h5>Senior UI/UX Designer</h5>
										<p className="text-300 mb-0">Leader in Creative team</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">2016 - 2019</p>
										<h5>UI/UX Designer at BOS Agency</h5>
										<p className="text-300 mb-0">Tech Startup</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">2014-2016</p>
										<h5>Freelance UI/UX Designer</h5>
										<p className="text-300 mb-0">Self-Employed</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-4">
										<p className="fw-extra-bold text-linear-1 mb-2">2012 - 2014</p>
										<h5>Junior UI Designer</h5>
										<p className="text-300 mb-0">Web Solutions team</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="scroll-move-right position-relative pb-160 pt-lg-150">
					<div className="d-flex align-items-center gap-5 wow img-custom-anim-top position-absolute top-50 start-50 translate-middle">
						<h3 className="stroke fs-150 text-uppercase text-white">Branding . Marketing . User Interface</h3>
					</div>
				</div>
			</section>

		</>
	)
}
