import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import theme from "../../../styles/theme";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
	return (
		<AppBar
			position='static'
			style={{
				backgroundColor: theme.primary,
			}}
		>
			<Container maxWidth='md'>
				<Toolbar
					style={{
						justifyContent: "space-between",
					}}
				>
					<Typography variant='body1' color='inherit'>
						© Sonny In The Stars
					</Typography>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							padding: 10,
							justifyContent: "center",
						}}
					>
						<p style={{ color: theme.primaryText }}>
							<a
								href='https://www.instagram.com/sonnyintheclouds_/'
								target='_blank'
								rel='noreferrer'
								color='#fff'
							>
								{/* <FaInstagramSquare size={50} color='#fff' /> */}
								Instagram
							</a>
						</p>
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
