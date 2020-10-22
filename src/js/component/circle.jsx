import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Circle(props) {
	const [ligthOn, setLightOn] = useState(false);
	return (
		<div
			className={props.classContent}
			onClick={() => {
				setLightOn(!ligthOn);
				console.log({ ligthOn });
			}}
		/>
	);
}

Circle.propTypes = {
	classContent: PropTypes.string,
	eventContent: PropTypes.string
};
