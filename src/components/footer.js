import * as React from "react";
import classes from "./Footer.module.scss";
import { IconContext } from "react-icons";
import { FaEnvelope } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

const Footer = () => {
	return (
		<>
			<div className={classes.footer}>
				<div>Created by Jaden Mathias</div>
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
						href="https://docs.google.com/document/d/1khiEsC11ncphRsh9qKhh-UjT_UeZRgh1KK5RotjVXfc/edit?usp=sharing"
					>
						<BsFileEarmarkArrowDown />
					</a>
				</div>
			</div>
		</>
	);
};

export default Footer;
