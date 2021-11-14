import React from "react";
import { useStyles } from "./styles";
import "./artCard.css";
import theme from "../../../styles/theme";

export default function ArtCard({ image, label }) {
	const { labelStyle, imageStyle } = useStyles();
	return (
		<div
			className={"card-container"}
			// style={{ backgroundColor: theme.primary, color: theme.primaryText }}
		>
			<img src={image} alt='loading pic' className={imageStyle} />
			<div className={labelStyle}>{label}</div>
		</div>
	);
}
