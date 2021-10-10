import React from "react";

//-----> Components
import Tools from "../tools/Tools";
import Vamsi from "../vamsi/Vamsi";
import Contact from "../contact/Contact";
import Profile from "../profile/Profile";
import Projects from "../projects/Projects";

export default function Home() {
	return (
		<div>
			<Vamsi />
			<Projects />
			<Tools />
			<Profile />
			<Contact />
		</div>
	);
}
