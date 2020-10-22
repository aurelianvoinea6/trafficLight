import React from "react";
import PropTypes from "prop-types";

export function Circle(props) {
	return <div className={props.classContent} />;
}

Circle.propTypes = {
	classContent: PropTypes.string
};
