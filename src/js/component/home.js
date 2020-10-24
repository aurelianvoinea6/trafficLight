import React, { useState } from "react";
import { Circle } from "./circle.jsx";

export function Home() {
	const [redLight, setRedLight] = useState("");
	const [orangeLight, setOrangeLight] = useState("");
	const [greenLight, setGreenLight] = useState("");

	return (
		<div>
			<h1 className="text">Click on the lights!</h1>
			<div className="traffic-lights">
				<Circle
					classContent={"lightOff " + redLight}
					eventContent={() => {
						if (redLight == "") {
							setRedLight("red");
							setOrangeLight("");
							setGreenLight("");
						}
					}}
				/>
				<Circle
					classContent={"lightOff " + orangeLight}
					eventContent={() => {
						if (orangeLight == "") {
							setRedLight("");
							setOrangeLight("orange");
							setGreenLight("");
						}
					}}
				/>
				<Circle
					classContent={"lightOff " + greenLight}
					eventContent={() => {
						if (greenLight == "") {
							setRedLight("");
							setOrangeLight("");
							setGreenLight("green");
						}
					}}
				/>
			</div>
		</div>
	);
}
