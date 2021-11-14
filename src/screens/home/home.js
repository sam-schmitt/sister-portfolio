import React from "react";
import ArtCard from "../../components/cards/artCard/artCard";
import { useStyles } from "./styles";
import One from "../../assets/artwork/one.jpg";
import Two from "../../assets/artwork/two.jpg";
import Three from "../../assets/artwork/three.jpg";

export default function Home() {
	const { home } = useStyles();
	const artworkList = [
		{
			label: "My witch postcard",
			image: Three,
		},

		{
			label: "Aries wants to let you know she sees and appreciates the support",
			image: Two,
		},
		{
			label:
				"Beginning my creative space journey powerfully, mindfully, and unapologetically",
			image: One,
		},
	];

	const getArtWork = () => {
		return artworkList.map(({ label, image }) => {
			return <ArtCard label={label} image={image} />;
		});
	};

	return (
		<div className='screen'>
			<h1>Artwork</h1>
			<div
				style={{
					display: "flex",
					height: "90vh",
					flexDirection: "column",
					padding: 10,
					alignItems: "center",
				}}
			>
				<div className={home}>{getArtWork()}</div>
			</div>
		</div>
	);
}
