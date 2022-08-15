import * as React from "react";
import classes from "./Project.module.scss";

const Project = (props) => {
	return (
		<div className={classes.proj}>
			<img src={props.image} alt="" className={classes.proj__image} />
			<div className={classes.proj__info}>
				<h1 className={classes.proj__title}>{props.title}</h1>
				<p className={classes.proj__desc}>{props.desc}</p>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={props.link}
					className={classes.button}
				>
					Try it
				</a>
			</div>
		</div>
	);
};

export default Project;
