import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: "#00bcd4",
		color: "#fff",
		paddingRight: "79px",
		paddingLeft: "118px",
		"@media (max-width: 900px)": {
			paddingLeft: 0,
		},
	},
	logo: {
		fontFamily: "Work Sans, sans-serif",
		fontWeight: 600,
		color: "#FFFEFE",
		textAlign: "left",
	},
	menuButton: {
		fontFamily: "Open Sans, sans-serif",
		fontWeight: 700,
		size: "18px",
		marginLeft: "38px",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	drawerContainer: {
		padding: "20px 30px",
	},
}));
