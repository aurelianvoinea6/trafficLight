import React from "react";
import { Circle } from "./circle.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="traffic-lights shape">
			<Circle classContent="light red" />
			<Circle classContent="light amber" />
			<Circle classContent="light green" />
		</div>
	);
}
