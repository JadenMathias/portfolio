import * as React from "react";
import classes from "./Project.module.scss";

const Project = (props) => {
	return (
		<div className={classes.proj}>
			<img src={props.image} alt="" className={classes.proj__image} />
			<div className={classes.proj__info}>
				<h1 className={classes.proj__title}>{props.title}</h1>
				<p className={classes.proj__desc}>{props.desc}</p>
				<div className={classes.proj__links}>
					{props.links.map((current) => {
						return (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={current.link}
								className={classes.button}
							>
								{current.title}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Project;
