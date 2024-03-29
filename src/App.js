//-----> Modules
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//-----> Components
import Home from "./components/pages/home/Home";
import NavMenu from "./components/navMenu/NavMenu";
import Skills from "./components/pages/skills/Skills";
import Projects from "./components/pages/projects/Projects";
import Contact from "./components/pages/contact/Contact";
import Tools from "./components/pages/tools/Tools";
import Profile from "./components/pages/profile/Profile";
import Apperciations from "./components/pages/apperciations/Apperciation";

//-----> SCSS
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<NavMenu />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/skills" component={Skills} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/tools" component={Tools} />
					<Route exact path="/profile" component={Profile} />
					<Route
						exact
						path="/apperciations"
						component={Apperciations}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
