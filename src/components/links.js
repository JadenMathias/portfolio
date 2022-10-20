import * as React from "react";
import classes from "./Footer.module.scss";
import { FaEnvelope } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

const Links = () => {
	return (
		<div className={classes.footer__icons}>
			<a
				className={classes.icon}
				target="_blank"
				rel="noopener noreferrer"
				href="mailto: mathias.jaden@gmail.com"
			>
				<FaEnvelope />
			</a>
			<a
				className={classes.icon}
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/in/jaden-mathias-790616190/"
			>
				<SiLinkedin />
			</a>
			<a
				className={classes.icon}
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/JadenMathias"
			>
				<SiGithub />
			</a>
			<a
				className={classes.icon}
				target="_blank"
				rel="noopener noreferrer"
				href="https://drive.google.com/u/0/uc?id=1ZS5equwfrufp0Nf4lUPdPvvo8L71WCml&export=download"
			>
				<BsFileEarmarkArrowDown />
			</a>
		</div>
	);
};

export default Links;
