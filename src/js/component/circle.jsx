import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Circle(props) {
	return <div className={props.classContent} onClick={props.eventContent} />;
}

Circle.propTypes = {
	classContent: PropTypes.string,
	eventContent: PropTypes.string
};
