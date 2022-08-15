import * as React from "react";

import classes from "./About.module.scss";
import img from "../images/Jaden.jpg";
const About = () => {
	return (
		<main className={classes.aboutme}>
			<div className={classes.aboutme__content__one}>
				<img className={classes.aboutme__content__one__pfp} src={img} alt="" />
				<p className={classes.aboutme__content__one__para}>
					Jaden Mathias is currently a third year student at McMaster University, pursuing
					a Major in Computer science. As a undergraduate student he works on many
					personal projects to strenghten his coding skills. <br />
					<br />
					Currently, he has taken the positon of Co Vice president of events at McMaster
					Start Coding club.
					<br />
					<br />
					Jaden is a team player and a creative yet critical thinker. He believes that he
					is a fast learner and can be flexible with any work assigned to him. <br />
					During his free time Jaden enjoys gaming, swimming and coding.
				</p>
			</div>
			<div className={classes.aboutme__content__two}>
				<ul className={classes.skillset}>
					<li className={classes.skill}>Python</li>
					<li className={classes.skill}>Java</li>
					<li className={classes.skill}>C</li>
					<li className={classes.skill}>HTML</li>
					<li className={classes.skill}>CSS</li>
					<li className={classes.skill}>SCSS</li>
					<li className={classes.skill}>JavaScript</li>
					<li className={classes.skill}>TypeScript</li>
					<li className={classes.skill}>Haskell</li>
					<li className={classes.skill}>C#</li>
					<li className={classes.skill}>Dart</li>
					<li className={classes.skill}>Elm</li>
				</ul>
			</div>
		</main>
	);
};

export default About;
