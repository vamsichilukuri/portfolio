import React from "react";

//-----> Modules
import {
	Grid,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";
import { GitHub, VisibilitySharp } from "@material-ui/icons";

//-----> Image's & Icon's
import TodoImage from "./images/todo.jpg";
import ContactImage from "./images/contact_list.png";
import SocialMedia from "./images/socail_media.png";
import ChatBot from "./images/chat_bot.png";
import SocialMedia2 from "./images/socailmedia.webp";

//-----> SCSS
import "./projects.scss";

const Projects = () => {
	const webProjects = [
		{
			name: "Todo",
			description: "Make your day with challenging to finish your ToDo's",
			source: "https://github.com/vamsichilukuri/todo",
			image: TodoImage,
		},
		{
			name: "Contact List",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
			source: "https://github.com/vamsichilukuri/todo",
			image: ContactImage,
		},
		{
			name: "Social Media",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
			source: "https://github.com/vamsichilukuri/todo",
			image: SocialMedia,
		},
		{
			name: "Chat BOT",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
			source: "https://github.com/vamsichilukuri/todo",
			image: ChatBot,
		},
	];
	const mobileProjects = [
		{
			name: "Todo",
			description: "Make your day with challenging to finish your ToDo's",
			source: "https://github.com/vamsichilukuri/todo",
			image: TodoImage,
		},
		{
			name: "Contact List",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
			source: "https://github.com/vamsichilukuri/todo",
			image: ContactImage,
		},
		{
			name: "Social Media",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
			source: "https://github.com/vamsichilukuri/todo",
			image: SocialMedia2,
		},
		{
			name: "Chat BOT",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
			source: "https://github.com/vamsichilukuri/todo",
			image: ChatBot,
		},
	];
	const microservicesProjects = [
		{
			name: "Todo",
			description: "Make your day with challenging to finish your ToDo's",
			source: "https://github.com/vamsichilukuri/todo",
			image: TodoImage,
		},
		{
			name: "Contact List",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
			source: "https://github.com/vamsichilukuri/todo",
			image: ContactImage,
		},
		{
			name: "Social Media",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
			source: "https://github.com/vamsichilukuri/todo",
			image: SocialMedia2,
		},
		{
			name: "Chat BOT",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
			source: "https://github.com/vamsichilukuri/todo",
			image: ChatBot,
		},
	];
	return (
		<div className="projects_main">
			<h1>Projects</h1>
			<div className="all_projects_list">
				<div className="web_projects">
					<h2>Web</h2>
					<Grid container className="projects">
						{webProjects.map(
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
				</div>
			</div>
		</div>
	);
};

export default Projects;
