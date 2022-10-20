import * as React from "react";
import classes from "./Footer.module.scss";
import Links from "./links";

const Footer = () => {
	return (
		<>
			<div className={classes.footer}>
				<div>Created by Jaden Mathias</div>
				<Links />
			</div>
		</>
	);
};

export default Footer;
