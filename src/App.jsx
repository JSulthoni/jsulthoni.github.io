import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import Contact from "./components/contact";
import { ModeContext } from "./context/modeContext";

function App() {
	// Using useState and useEffect to rerender the page once after it was mounted
	const [mount, setMount] = useState(false)
	useEffect(() => {
		setMount((prev) => !prev);

		return () => {
			setMount((prev) => !prev);
		}
	}, [])



	// Getting array of tags witch className of __scroll
	const scrollElements = document.querySelectorAll('.__hide');

	// Base function for IntersectionObserver
	const observer = new IntersectionObserver((elements) => {
		elements.forEach((element) => {
			if (element.isIntersecting) {
				element.target.classList.add('__show')
			} else {
				element.target.classList.remove('__show')
			}
		})
	});

	// Applying observer to arrayOfElements
	scrollElements.forEach((element) => observer.observe(element))


	// Add nightmode
	const { mode } = useContext(ModeContext);
	useEffect(() => {
		document.querySelector('html').classList.add(mode);

		return () => {
			document.querySelector('html').classList.remove(mode);
		}
	}, [mode])

	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Project />
			<Contact />
		</div>
	);
}

export default App;