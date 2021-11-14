import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	MenuItem,
	Drawer,
	Link,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import { Link as RouterLink } from "react-router-dom";
import { Menu } from "@material-ui/icons";

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
	const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});
	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());

		return () => {
			window.removeEventListener("resize", () => setResponsiveness());
		};
	}, []);
	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				{headerLogo}
				<div>{getMenuButtons()}</div>
			</Toolbar>
		);
	};
	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));
		return (
			<Toolbar>
				<IconButton
					{...{
						edge: "start",
						color: "inherit",
						"aria-label": "menu",
						"aria-haspopup": true,
						onClick: handleDrawerOpen,
					}}
				>
					<Menu />
				</IconButton>
				<Drawer
					{...{
						anchor: "left",
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
					<div className={drawerContainer}>{getDrawerChoices()}</div>
				</Drawer>
				<div>{headerLogo}</div>
			</Toolbar>
		);
	};

	const getDrawerChoices = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Link
					{...{
						component: RouterLink,
						to: href,
						color: "inherit",
						style: { textDecoration: "none" },
						key: label,
					}}
				>
					<MenuItem>{label}</MenuItem>
				</Link>
			);
		});
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
			<AppBar className={header}>
				{" "}
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	);
}
