import React from "react";

//-----> Modules
import { Grid } from "@material-ui/core";

//-----> Image's & Icon's
import FebApperciation from "./images/feb_apperciation.jpg";
import AprilApperciation from "./images/april_apperciation.jpg";
import Momento from "./images/momento1.png";

// -----> scss
import "./apperciation.scss"

function Apperciation() {
	return (
		<div className="main_apperciation">
			<h2>Apperciations</h2>
				
			{/* <Grid container className="apperciations_grid" data-aos="fade-up" data-aos-duration="1500">
				<Grid
					item
					xs={12}
					sm={12}
					md={5}
					lg={5}
					className="momento_image_block"
				>
					<div
					// data-aos="zoom-in" data-aos-duration="1500"
					>
						<img src={Momento} alt="profileImage"  />
					</div>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={5}
					lg={5}
					className="certificates_image_block"
				>
					<div
					// data-aos="zoom-in" data-aos-duration="1500"
					>
						<img src={FebApperciation} alt="profileImage" />
					</div>
					<div
					// data-aos="zoom-in" data-aos-duration="1500"
					>
						<img src={AprilApperciation} alt="profileImage" />
					</div>
				</Grid>
			</Grid> */}
			<Grid container className="apperciations_grid" data-aos="fade-up" data-aos-duration="1500">
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					lg={4}
					className="certificates_image_block"
				>
					<div
					// data-aos="zoom-in" data-aos-duration="1500"
					>
						<img src={FebApperciation} alt="profileImage" />
					</div>
					
				</Grid>
					<Grid
					item
					xs={12}
					sm={12}
					md={4}
					lg={4}
					className="momento_image_block"
				>
					<div
					// data-aos="zoom-in" data-aos-duration="1500"
					>
						<img src={Momento} alt="profileImage"  />
					</div>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					lg={4}
					className="certificates_image_block"
				>

					<div
					// data-aos="zoom-in" data-aos-duration="1500"
					>
						<img src={AprilApperciation} alt="profileImage" />
					</div>
				</Grid>
			</Grid>
			</div>
		
	);
}

export default Apperciation;
