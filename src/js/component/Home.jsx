
import React from "react"; // importo React
import rigoImage from "../../img/rigo-baby.jpg"; //include images into your bundle

//2. Create your first component with PascalCase name
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx"; // Componente con export default
import { Footer } from "./Footer.jsx"; // Componente con export const
import { Jumbotron } from "./Jumbotron.jsx";

//create your first component
const Home = () => {
	// 3. Código de JS

	// 4. Devuelvo un único elemento HTML
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


// 5. Exporto mi componente
export default Home;


// En el archivo donde voy a utilizar el componente debo:
// 6. Importar el componente
// 7. Utilizar el componente