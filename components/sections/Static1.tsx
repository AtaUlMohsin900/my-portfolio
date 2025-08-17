
'use client'
import CountUp from 'react-countup'

export default function Static1() {
	return (
		<>

			<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900">
				<div className="container">
					<div className="inner">
						<div className="row align-items-center justify-content-between">
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary fw-medium my-0">+<CountUp  enableScrollSpy={true} end={12} className="odometer ds-1 text-dark fw-semibold"/></span>
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
										<span className="ds-3 count text-primary fw-medium my-0">+<CountUp  enableScrollSpy={true} end={250} className="odometer ds-1 text-dark fw-semibold"/></span>
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
										<span className="ds-3 count text-primary fw-medium my-0">+<CountUp  enableScrollSpy={true} end={680} className="odometer ds-1 text-dark fw-semibold"/></span>
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
										<span className="ds-3 count text-primary fw-medium my-0">+<CountUp  enableScrollSpy={true} end={18} className="odometer ds-1 text-dark fw-semibold"/></span>
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

		</>
	)
}
