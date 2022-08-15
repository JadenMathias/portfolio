import * as React from "react";
// import Typer from "../components/typer";
import classes from "./Home.module.scss";
import img from "../images/jaden.png";
import findr from "../images/findr.png";
import valorant from "../images/valorant.png";
import mathbot from "../images/mathbot.png";
import mcmaster from "../images/mcmasterLogo.png";
import Project from "../components/project";
import pong from "../images/pong.png";
import Header from "../components/header";
import Footer from "../components/footer";
const Home = () => {
	return (
		<>
			<Header />
			<div className={classes.mainContainer}>
				<section className={classes.home} id="home">
					<img className={classes.home__image} src={img} alt="" />
					<div className={classes.home__content}>
						<h1>Jaden Mathias</h1>
						<p className={classes.home__para}>
							Computer Science student studying at McMaster University
						</p>
					</div>
				</section>
				<section className={classes.about} id="about">
					<h1>About</h1>
					<p className={classes.about__content}>
						Jaden Mathias is currently a third year student at McMaster University,
						pursuing a Major in Computer science. As a undergraduate student he works on
						many personal projects to strenghten his coding skills. <br />
						<br />
						Currently, he has taken the positon of Co Vice president of events at
						McMaster Start Coding club.
						<br />
						<br />
						Jaden is a team player and a creative yet critical thinker. He believes that
						he is a fast learner and can be flexible with any work assigned to him.{" "}
						<br />
						During his free time Jaden enjoys gaming, swimming and coding.
					</p>
					<div className={classes.about__skills}>
						<h2>Skills</h2>
						<div className={classes.about__skills__content}>
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
								<li className={classes.skill}>Flutter</li>
								<li className={classes.skill}>ReactJS</li>
								<li className={classes.skill}>Go</li>
								<li className={classes.skill}>Unity</li>
							</ul>
						</div>
					</div>
				</section>
				<div className={classes.divider}></div>
				<section className={classes.projects} id="project">
					<h1>Projects</h1>
					<div className={classes.projects__content}>
						<Project
							image={valorant}
							title="Valorant Soundboard"
							desc="Valorant Soundboard is a entertainment based Soundboard app that plays
							back audio queues from the popular video game, Valorant. The app was
							made using Android Studio and was programmed in Java. Though currently
							it is unavaible on the Playstore, the .apk file provided can be used to
							run the app on your Android devices!"
							link="https://drive.google.com/file/d/1ln-72otoXC8WHIqTOYPiizlUSWGlJ2AH/view?usp=sharing"
						/>
						<Project
							image={pong}
							title="3D Neon Pong"
							desc="3D Neon Pong is a game inspired by the all time classic game: Pong.
					However, this game comes with a twist, where the landscape is three
					dimensional instead of two, making it much more challenging and fun. It
					was made using Unity and programmed in C#. You can try the game or
					download it with the link below!"
							link="https://jmapps.itch.io/neon-3d-pong"
						/>
						<Project
							image={mathbot}
							title="Discord Math Bot"
							desc="Discord Math bot is a bot that can be used in your discord server. The
					main feature of this bot is that it can derivate mathematical equations.
					The bot was made in Python and was achieved by programming a
					interpreter. You can check out the code in the link below!"
							link="https://github.com/JadenMathias/Discord_math_bot"
						/>
						<Project
							image={findr}
							title="Findr"
							desc="Findr is an app that makes job search easy! The main idea is that
					applying is as easy as swiping left or right. The app was developed
					during a Hackathon and is still in the early stages. The app was
					developed using Flutter and programmed in Dart. Check out the demo in
					the link below!"
							link="https://devpost.com/software/findr-u6ovgb"
						/>
					</div>
				</section>
				<div className={classes.divider}></div>
				<section className={classes.education} id="edu">
					<h1>Education</h1>
					<div className={classes.education__content}>
						<img src={mcmaster} alt="Logo" className={classes.education__img} />
						<p>
							2020 - 2025<br></br>Third Year doing a Major in Computer Science
						</p>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default Home;
