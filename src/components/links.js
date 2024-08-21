import * as React from "react";
import classes from "./Footer.module.scss";
import { FaEnvelope } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

const Links = () => {
	return (
		<div className={classes.footer__icons}>
			<a className={classes.icon} target="_blank" rel="noopener noreferrer" href="mailto: mathias.jaden@gmail.com">
				<FaEnvelope />
			</a>
			<a className={classes.icon} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jadenxmathias/">
				<SiLinkedin />
			</a>
			<a className={classes.icon} target="_blank" rel="noopener noreferrer" href="https://github.com/JadenMathias">
				<SiGithub />
			</a>
			<a
				className={classes.icon}
				target="_blank"
				rel="noopener noreferrer"
				href="https://drive.google.com/file/d/1JV-hsqiTlOdDeRPr7_y5ao3nsuIP3Z8p/preview"
			>
				<BsFileEarmarkArrowDown />
			</a>
		</div>
	);
};

export default Links;
