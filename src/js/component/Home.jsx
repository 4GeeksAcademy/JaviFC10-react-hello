import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx"; // Componente con export default
import { Footer } from "./Footer.jsx"; // Componente con export const
import { Jumbotron } from "./Jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<h1 className="text-center mt-5">{"Intro React"}</h1>
			<Jumbotron />
			{/* <p>
				<img src={rigoImage} />
			</p> 
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>*/}
			
			<Footer />
		</div>
	);
};

export default Home;
