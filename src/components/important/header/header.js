import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
	const headersData = [
		{
			label: "Artwork",
			href: "/",
		},
		{
			label: "About Me",
			href: "/about",
		},
	];
	const { header, logo, menuButton, toolbar } = useStyles();

	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				{headerLogo}
				<div>{getMenuButtons()}</div>
			</Toolbar>
		);
	};

	const getMenuButtons = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Button
					{...{
						key: label,
						color: "inherit",
						to: href,
						component: RouterLink,
						className: menuButton,
					}}
				>
					{label}
				</Button>
			);
		});
	};

	const headerLogo = (
		<Typography variant='h6' component='h1' className={logo}>
			Sonny In The Stars
		</Typography>
	);

	return (
		<header>
			<AppBar className={header}>{displayDesktop()}</AppBar>
		</header>
	);
}
