import React from "react";
import { Circle } from "./circle.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="traffic-lights">
			<Circle classContent="red" />
			<Circle classContent="amber" />
			<Circle classContent="green" />
		</div>
	);
}
