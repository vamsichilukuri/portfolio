import React from "react";

//-----> Modules
import {
	Grid,
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";
// import { GitHub, VisibilitySharp } from "@material-ui/icons";
import { VisibilitySharp } from "@material-ui/icons";

//-----> Image's & Icon's
// import TodoImage from "./images/todo.jpg";
// import ContactImage from "./images/contact_list.png";
// import SocialMedia from "./images/socail_media.png";
// import ChatBot from "./images/chat_bot.png";
// import SocialMedia2 from "./images/socailmedia.webp";
import Vrcommerce from "./images/vrcommerce.png";
import Bakekick from "./images/bakekick.png";
import DigitalCards from "./images/digitalcards.png";
import Mindcentral from "./images/mindcentral.png";
import Kompound from "./images/kompound.png";
import Howdyguru from "./images/howdyguru.png";

//-----> SCSS
import "./projects.scss";

const Projects = () => {
	const webProjects = [
		{
			name: "Bakekick",
			description:
				"Bakekick Makes Managing Orders & Connecting Bakers Easy. Sells breads and other products made of flour by using an oven or other concentrated heat source. ",
			// source: "https://github.com/vamsichilukuri/todo",
			image: Bakekick,
			visit: "https://bakekick-5f0f6.web.app/#/",
		},
		{
			name: "Mindcentral",
			description:
				"We care about mental health Client can anonymously find help and schedule sessions. Therapists can easily manage and grow their practice.",
			// source: "https://github.com/vamsichilukuri/todo",
			image: Mindcentral,
			visit: "https://mindcentral.com/",
		},
		{
			name: "DigitalCards",
			description:
				"The NFT can be associated with a particular digital or physical asset (such as a file or a physical object) and a license to use the asset for a specified purpose.",
			// source: "https://github.com/vamsichilukuri/todo",
			image: DigitalCards,
			visit: "https://jetnft.com/",
		},
		{
			name: "Howdyguru",
			description:
				"We provide three types of learning modes: Ready-made courses, Live 1-on-classes, Live group webinars. advanced filters such as course categories, subjects, topics and tutor",
			// source: "https://github.com/vamsichilukuri/todo",
			image: Howdyguru,
			visit: "https://howdyguru.com/",
		},
		{
			name: "Kompound",
			description:
				"Cryptocurrency exchanges are platforms that facilitate the trading of cryptocurrencies for other assets, including digital and fiat currencies. In effect, cryptocurrency exchanges act as an intermediary between a buyer and a seller and make money through commissions and transaction fees.",
			// source: "https://github.com/vamsichilukuri/todo",
			image: Kompound,
			visit: "https://www.kompound.app/",
		},
		{
			name: "VR Commerce",
			description:
				"Create Virtual Tours that engage your audience Our editor is simple but packed with powerful features. With the PRO plan you can create unlimited tours, add labels, custom hotspots, background audio, interactive cards and floor plans. Create beautiful 360 tours that your users won't easily forget!",
			// source: "https://github.com/vamsichilukuri/todo",
			image: Vrcommerce,
			visit: "https://app.vrcommerce.io/",
		},
	];
	// const mobileProjects = [
	// 	{
	// 		name: "Todo",
	// 		description: "Make your day with challenging to finish your ToDo's",
	// 		source: "https://github.com/vamsichilukuri/todo",
	// 		image: TodoImage,
	// 	},
	// 	{
	// 		name: "Contact List",
	// 		description:
	// 			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
	// 		source: "https://github.com/vamsichilukuri/todo",
	// 		image: ContactImage,
	// 	},
	// 	{
	// 		name: "Social Media",
	// 		description:
	// 			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
	// 		source: "https://github.com/vamsichilukuri/todo",
	// 		image: SocialMedia2,
	// 	},
	// 	{
	// 		name: "Chat BOT",
	// 		description:
	// 			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
	// 		source: "https://github.com/vamsichilukuri/todo",
	// 		image: ChatBot,
	// 	},
	// ];
	// const microservicesProjects = [
	// 	{
	// 		name: "Todo",
	// 		description: "Make your day with challenging to finish your ToDo's",
	// 		source: "https://github.com/vamsichilukuri/todo",
	// 		image: TodoImage,
	// 	},
	// 	{
	// 		name: "Contact List",
	// 		description:
	// 			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
	// 		source: "https://github.com/vamsichilukuri/todo",
	// 		image: ContactImage,
	// 	},
	// 	{
	// 		name: "Social Media",
	// 		description:
	// 			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
	// 		source: "https://github.com/vamsichilukuri/todo",
	// 		image: SocialMedia2,
	// 	},
	// 	{
	// 		name: "Chat BOT",
	// 		description:
	// 			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
	// 		source: "https://github.com/vamsichilukuri/todo",
	// 		image: ChatBot,
	// 	},
	// ];
	return (
		<div className="projects_main">
			<h1>Projects</h1>
			<div className="all_projects_list">
				<div className="web_projects">
					{/* <h2>Web</h2> */}
					<Grid container className="projects">
						{webProjects.map(
							({ image, name, description, visit }) => {
								return (
									<Grid
										item
										xs={11}
										sm={11}
										md={3}
										lg={3}
										className="project"
									>
										<Card
											className="card"
											data-aos="zoom-in"
											data-aos-duration="1500"
										>
											<CardActionArea>
												<CardMedia
													component="img"
													height="140"
													image={image}
													alt="green iguana"
												/>
												<CardContent className="card_content">
													<Typography
														gutterBottom
														variant="h5"
														component="div"
													>
														{name}
													</Typography>
													<Typography
														variant="body2"
														color="text.secondary"
													>
														{description}
													</Typography>
												</CardContent>
											</CardActionArea>
											<CardActions className="card_buttons">
												<Button
													variant="contained"
													size="small"
													endIcon={
														<VisibilitySharp />
													}
													style={{
														backgroundColor:
															"#cfcfcf",
														fontWeight: "600",
													}}
													onClick={() =>
														window.open(
															visit,
															"_blank"
														)
													}
												>
													Visit
												</Button>
											</CardActions>
											{/* <CardActions className="card_buttons">
												<Button
													variant="contained"
													size="small"
													endIcon={<GitHub />}
													style={{
														backgroundColor:
															"#cfcfcf",
														fontWeight: "600",
													}}
												>
													Source
												</Button>
												<Button
													variant="contained"
													size="small"
													endIcon={
														<VisibilitySharp />
													}
													style={{
														backgroundColor:
															"#cfcfcf",
														fontWeight: "600",
													}}
												>
													Visit
												</Button>
											</CardActions> */}
										</Card>
									</Grid>
								);
							}
						)}
					</Grid>
					<div className="code_quality">
						<a
							href="https://github.com/vamsichilukuri/blogpost.git"
							target="_blank"
							rel="noreferrer"
						>
							View code quality of a sample project
						</a>
					</div>
				</div>
				{/* <div className="web_projects">
					<h2>Mobile</h2>
					<Grid container className="projects">
						{mobileProjects.map(
							({ image, name, description, source }) => {
								return (
									<Grid
										item
										xs={11}
										sm={11}
										md={3}
										lg={3}
										className="project"
									>
										<Card
											className="card"
											data-aos="zoom-in"
											data-aos-duration="1500"
										>
											<CardMedia
												component="img"
												height="140"
												image={image}
												alt="green iguana"
											/>
											<CardContent className="card_content">
												<Typography
													gutterBottom
													variant="h5"
													component="div"
												>
													{name}
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
												>
													{description}
												</Typography>
											</CardContent>
											<CardActions className="card_buttons">
												<Button
													variant="contained"
													size="small"
													endIcon={<GitHub />}
													style={{
														backgroundColor:
															"#cfcfcf",
														fontWeight: "600",
													}}
												>
													Source
												</Button>
												<Button
													variant="contained"
													size="small"
													endIcon={
														<VisibilitySharp />
													}
													style={{
														backgroundColor:
															"#cfcfcf",
														fontWeight: "600",
													}}
												>
													Visit
												</Button>
											</CardActions>
										</Card>
									</Grid>
								);
							}
						)}
					</Grid>
				</div>
				<div className="web_projects">
					<h2>Microservices ( Docker & Kubernetes )</h2>
					<Grid container className="projects">
						{microservicesProjects.map(
							({ image, name, description, source }) => {
								return (
									<Grid
										item
										xs={11}
										sm={11}
										md={3}
										lg={3}
										className="project"
									>
										<Card
											className="card"
											data-aos="zoom-in"
											data-aos-duration="1500"
										>
											<CardMedia
												component="img"
												height="140"
												image={image}
												alt="green iguana"
											/>
											<CardContent className="card_content">
												<Typography
													gutterBottom
													variant="h5"
													component="div"
												>
													{name}
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
												>
													{description}
												</Typography>
											</CardContent>
											<CardActions className="card_buttons">
												<Button
													variant="contained"
													size="small"
													endIcon={<GitHub />}
													style={{
														backgroundColor:
															"#cfcfcf",
														fontWeight: "600",
													}}
												>
													Source
												</Button>
												<Button
													variant="contained"
													size="small"
													endIcon={
														<VisibilitySharp />
													}
													style={{
														backgroundColor:
															"#cfcfcf",
														fontWeight: "600",
													}}
												>
													Visit
												</Button>
											</CardActions>
										</Card>
									</Grid>
								);
							}
						)}
					</Grid>
				</div> */}
			</div>
		</div>
	);
};

export default Projects;
