import React, { useEffect } from "react";
import VWD from "./images/vamsi.jpeg";
import "./vamsi.scss";
import { Grid } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

const Vamsi = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div className="vamsi-container">
			<Grid container>
				<Grid item xs={12} sm={12} md={6}>
					<div
						data-aos="fade-left"
						data-aos-duration="1000"
						className="headings"
					>
						<span>Hello, this is </span>
						<h1>Vamsi Chilukuri</h1>
						<div className="info-block">
							<p>
								I'm a Full-stack developer. i build <b>Web</b> &
								<b> Mobile</b> applications. works with both the
								frontend, backend and deployment of a website or
								application. Provide an end-to-end service for
								1+ years. Also work on microservices.
							</p>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div data-aos="zoom-in" className="devImg">
						<img src={VWD} alt="developerimage" />
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Vamsi;
