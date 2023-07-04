import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// <<<<<<< DanielH-landingPage-Jumbotron-DanielH
import  {Jumbotron}  from "./Jumbotron";
// =======
import { Footer } from "./Footer";

// >>>>>>> main

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
// <<<<<<< DanielH-landingPage-Jumbotron-DanielH
			
// =======
			<Footer/>
// >>>>>>> main
		</div>
		
	);
};

export default Home;
