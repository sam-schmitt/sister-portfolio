import React from "react";
import { useStyles } from "./styles";

export default function About() {
	const { about } = useStyles();

	return (
		<div className='screen'>
			<h1>About</h1>
			<div
				style={{
					display: "flex",
					height: "90vh",
					flexDirection: "column",
					padding: 10,
					alignItems: "center",
				}}
			>
				<div className={about}>content</div>
			</div>
		</div>
	);
}
