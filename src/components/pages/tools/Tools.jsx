import React from "react";

//-----> Module's
import { Grid } from "@material-ui/core";

//-----> Image's & Icon's
// import angularIcon from "./icons/angular.png";
import awsIcon from "./icons/amazon-web-services.png";
import css3Icon from "./icons/css3.png";
import digitaloceanIcon from "./icons/digitalocean.png";
import dockerIcon from "./icons/docker.png";
import html5Icon from "./icons/html5.png";
import javascriptIcon from "./icons/javascript.png";
import k8sIcon from "./icons/kubernetes.png";
import mongodbIcon from "./icons/mongodb.png";
import mySqlIcon from "./icons/mysql.png";
import nodeJsIcon from "./icons/nodejs.png";
import expressJsIcon from "./icons/expressjs.png";
import pm2Logo from "./icons/pm2.png";
import npmIcon from "./icons/npm.png";
import reactJsIcon from "./icons/react-js.png";
// import reactNativeIcon from "./icons/react-native.png";
import nginx from "./icons/nginx.png";
import gitIcon from "./icons/git.png";
import githubIcon from "./icons/github.gif";
import bitBucket from "./icons/bitbucket.png";
import gitLab from "./icons/gitlab.png";
import dynamoDB from "./icons/dynamoDB.png";
// aws services icons
import awsEc2 from "./icons/Amazon-EC2.jpg";
import s3Icon from "./icons/s3.jpg";
import Route53 from "./icons/amazon-route-53.jpg";
import awsLambda from "./icons/aws-lambda.jpg";
import cloudFront from "./icons/amazon-cloudfront.jpg";
import awsCodeBuild from "./icons/code_build.png";
import awsCodeDeploy from "./icons/aws-codedeploy.png";
import awsELB from "./icons/elb-icon.png";
import awsEKS from "./icons/AWS-EKS.png";

//-----> SCSS
import "./tools.scss";

export default function About() {
	return (
		<div>
			<div className="about-container">
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					className="headings"
				>
					<span>Tools which I'm capable in Full Stack</span>
					<div className="info-block">
						<p>
							I'm a Full-stack developer. i build <b>Web</b> &
							<b> Mobile</b> applications. works with both the
							frontend, backend and deployment of a website or
							application. Provide an end-to-end service for 2+
							years. Also work on microservices.
						</p>
					</div>
				</div>

				<Grid container className="tool-icons">
					<Grid
						item
						xs={12}
						md={3}
						sm={12}
						className="frontend-tools-block"
					>
						<div data-aos="fade-up" data-aos-duration="1500">
							<h2>FRONTEND</h2>
							<div className="web-tools-block">
								<h4>HTM, CSS & JAVASCRIPT</h4>
								<img src={html5Icon} alt="html" />
								<img src={css3Icon} alt="css" />
								<img src={javascriptIcon} alt="javascript" />
							</div>
							<div className="web-frameworks-block">
								<h4> REACT.JS </h4>
								<img src={reactJsIcon} alt="reactJs" />
								{/* <img src={angularIcon} alt="angular" /> */}
							</div>
							{/* <div className="mobile-frameworks-block">
								<h4>REACT NATIVE </h4>
								<img
									src={reactNativeIcon}
									alt="reactNativeIcon"
								/>
							</div> */}

							<div className="web-service-tools">
								<h2>
									WEB SERVER & PROCESS MANAGER & PACKAGE
									MANAGER
								</h2>
								<h4> NGINX, PM2 & NPM</h4>
								<img src={nginx} alt="nginx" />
								<img
									src={pm2Logo}
									alt="pm2Logo"
									style={{
										position: "relative",
										top: "-22px",
									}}
								/>
								<img src={npmIcon} alt="npmIcon" />
							</div>
						</div>
					</Grid>
					<Grid
						item
						xs={12}
						md={2}
						sm={12}
						className="backend-tools-block"
					>
						<div data-aos="fade-up" data-aos-duration="1500">
							<h2>BACKEND</h2>
							<div className="server-side">
								<h4>NODE.JS with EXPRESS.JS</h4>
								<img src={nodeJsIcon} alt="nodeJsIcon" />
								<img
									src={expressJsIcon}
									alt="expressJsIcon"
									style={{
										position: "relative",
										top: "-20px",
									}}
								/>
							</div>
							<div className="databases">
								<h4>MONOGDB, DYNAMODB & MYSQL</h4>
								<img src={mongodbIcon} alt="mongodbIcon" />
								<img src={dynamoDB} alt="dynamodb" />
								<img src={mySqlIcon} alt="mySqlIcon" />
							</div>
						</div>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}
						sm={12}
						className="cloud-tools-block"
					>
						<div data-aos="fade-up" data-aos-duration="1500">
							<h2>CLOUD PLATFORMS</h2>
							<h4> AWS & DIGITAL OCEAN</h4>
							<img src={awsIcon} alt="awsIcon" />
							<img
								src={digitaloceanIcon}
								alt="digitaloceanIcon"
							/>
							<div className="web-service-tools">
								<h2>AWS SERVICES</h2>
								<h4>
									EC2, S3, ROUTE53, LAMBDA, CLOUDFRONT, CODE
									BUILD, CODE DEPLOY, ELB, EKS
								</h4>
								<img src={awsEc2} alt="nginx" />
								<img src={s3Icon} alt="nginx" />
								<img src={Route53} alt="nginx" />
								<img src={awsLambda} alt="nginx" />
								<img src={cloudFront} alt="nginx" />
								<img src={awsCodeBuild} alt="nginx" />
								<img src={awsCodeDeploy} alt="nginx" />
								<img src={awsELB} alt="nginx" />
								<img src={awsEKS} alt="nginx" />
							</div>
							{/* <div className="web-service-tools">
								<h2>
									WEB SERVER & PROCESS MANAGER & PACKAGE
									MANAGER
								</h2>
								<h4> NGINX, PM2 & NPM</h4>
								<img src={nginx} alt="nginx" />
								<img
									src={pm2Logo}
									alt="pm2Logo"
									style={{
										position: "relative",
										top: "-22px",
									}}
								/>
								<img src={npmIcon} alt="npmIcon" />
							</div> */}
						</div>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						sm={12}
						className="cop-tools-block"
					>
						<div
							data-aos="fade-up"
							data-aos-duration="1500"
							className="COPs"
						>
							<h2>
								CONTAINER ORCHESTRATION PLATFORM & CONTAINERIZE
							</h2>
							<h4> DOCKER & KUBERNETES</h4>
							<img src={dockerIcon} alt="dockerIcon" />
							<img src={k8sIcon} alt="k8sIcon" />
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1500"
							className="vcs"
						>
							<h2>VERSION CONTROL SYSTEM</h2>
							<h4> GIT, GITHUB, GITLAB, BITBUCKET & DOCKERHUB</h4>
							<img src={gitIcon} alt="gitIcon" />
							<img src={githubIcon} alt="githubIcon" />
							<img src={gitLab} alt="gitLab" />
							<img src={bitBucket} alt="bitBucket" />
							<img src={dockerIcon} alt="dockerIcon" />
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
