import React from "react";

//-----> Modules
import { Grid } from "@material-ui/core";

//-----> Image's & Icon's
// import Vamsi1 from "./images/vamsi1.jpeg";
import Vamsi2 from "./images/vamsi2.jpg";

//-----> SCSS
import "./profile.scss";

function Profile() {
	return (
		<div className="profile">
			<Grid container className="profile_grid">
				<Grid
					item
					xs={12}
					sm={12}
					md={5}
					lg={5}
					className="profile_image_block"
				>
					<div data-aos="zoom-in" data-aos-duration="1500">
						<img src={Vamsi2} alt="profileImage" />
					</div>
				</Grid>
				<Grid
					item
					xs={11}
					sm={11}
					md={6}
					lg={6}
					className="profile_details_block"
				>
					<div
						className="profile_details self"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h2>PERSONAL DETAILS</h2>
						<Grid container className="bio_section">
							<Grid item xs={4} sm={4} md={4} lg={4}>
								<ul>
									<li>Name</li>
									<li>Father Name</li>
									<li>Mother Name</li>
									<li>Date of Birth</li>
									<li>Gender</li>
									<li>Designation</li>
									<li>Profession</li>
									<li>Experience</li>
									<li>Nationality</li>
									<li>Languages</li>
									<li>Address</li>
								</ul>
							</Grid>
							<Grid item xs={1} sm={1} md={1} lg={1}>
								<ul>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
								</ul>
							</Grid>
							<Grid item xs={6} sm={6} md={6} lg={6}>
								<ul>
									<li>Vamsi Chilukuri</li>
									<li>Rama Rao</li>
									<li>Sita</li>
									<li>23th june 1997</li>
									<li>Male</li>
									<li>Full Stack Developer</li>
									<li>Software ( IT )</li>
									<li>2 years 1 month</li>
									<li>Indian</li>
									<li>English, Telugu</li>
									<li>Panguluru ( Village ),</li>
									<li>J. Panguluru ( Post ),</li>
									<li>J. Panguluru ( Mandal ),</li>
									<li>Prakasam ( District ),</li>
									<li>Andhra Pradesh – 523 261.</li>
								</ul>
							</Grid>
						</Grid>
					</div>
					<div
						className="profile_details acadamic"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h2>ACADAMIC QUALIFICATION </h2>
						<ul>
							<li>
								Pursued B.Tech in Information Technology during
								2015-2020 batch, with an aggregate of 60% from
								Jawaharlal Nehru Technological University
								Kakinada.
							</li>
							<li>
								Pursued Intermediate during 2013-2015 with an
								aggregate of 58% from State Board of
								Intermediate Education , Hyderabad.
							</li>
							<li>
								Pursued S.S.C during 2012-2013 with an aggregate
								of 70% from State Board of Secondary Education ,
								Hyderabad.
							</li>
						</ul>
					</div>
					<div
						className="profile_details experience"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h2>WORK EXPERIENCE</h2>
						<Grid container className="companies_section">
							<Grid
								item
								xs={3}
								sm={3}
								md={3}
								lg={3}
								className="companies_section_left"
							>
								<ul>
									<li>Company</li>
									<li>Role</li>
									<li>Joined</li>
								</ul>
							</Grid>
							<Grid
								item
								xs={1}
								sm={1}
								md={1}
								lg={1}
								className="companies_section_middle"
							>
								<ul>
									<li>:</li>
									<li>:</li>
									<li>:</li>
								</ul>
							</Grid>
							<Grid item xs={7} sm={7} md={7} lg={7}>
								<ul>
									<li>I-Pangram Digital Services LLP.,</li>
									<li>Full Stack Developer</li>
									<li>July 27th 2020</li>
								</ul>
							</Grid>
						</Grid>
						<span>
							Job Responsibilities at I-Pangram Digital Services
							LLP:
						</span>
						<ul>
							<li>Develop FRONTEND applications.</li>
							<li>Develop BACKEND applications.</li>
							<li>
								Setup cloud infrastructure to deploy application
								for Sandbox and Production.
							</li>
							<li>
								Project management, Discuss project requirements
								and give key suggestions to clients.
							</li>
							<li>
								Worked on few concepts in block chain. NFT
								Market place, Learned ERC20 and ERC721.
							</li>
							<li>
								Work on Micro-services. Setup kubernetes cluster
								for production.
							</li>
							<li>
								Assist collegue's on road blocks in the project.
							</li>
						</ul>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Profile;
