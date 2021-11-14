import React from "react";
import "./artCard.css";

export default function ArtCard({ image, label }) {
	return (
		<div className={"card-container"}>
			<img src={image} alt='loading pic' className={"image-container"} />
			<div className={"description-container"}>{label}</div>
		</div>
	);
}
