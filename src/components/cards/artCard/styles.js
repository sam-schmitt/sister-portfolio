import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
	card: {
		flex: 1,
		flexDirection: "gridRow",
		boxShadow: "5px 10px black",
	},
	imageStyle: {
		flex: 1,
		height: 500,
		// borderR: 10,
	},
	labelStyle: {
		padding: 10,
		textAlign: "left",
	},
}));
