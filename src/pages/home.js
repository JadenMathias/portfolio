import * as React from "react";
// import Typer from "../components/typer";
import classes from "./Home.module.scss";
import img from "../images/jaden.png";
import findr from "../images/findr.png";
import _amima from "../images/amima.png";
import valorant from "../images/valorant.png";
import mathbot from "../images/mathbot.png";
import mcmaster from "../images/mcmasterLogo.png";
import Project from "../components/project";
import pong from "../images/pong.png";
import rbc from "../images/rbc.jpg";
import amd from "../images/amd.jpg";
import Header from "../components/header";
import Footer from "../components/footer";
import Links from "../components/links";
const Home = () => {
	return (
		<>
			<Header />
			<div className={classes.mainContainer}>
				<section className={classes.home} id="home">
					<img className={classes.home__image} src={img} alt="" />
					<div className={classes.home__content}>
						<h1>Jaden Mathias</h1>
						<p className={classes.home__para}>Passionate coder and problem solver, ready to tackle new challenges.</p>
						<Links />
					</div>
				</section>
				<section className={classes.about} id="about">
					<div className={classes.about__me}>
						<h1>About</h1>
						<div className={classes.about__me__content}>
							Hi, I’m Jaden Mathias, a fourth-year Computer Science student at McMaster University. I’m passionate about technology and
							have had the opportunity to work on diverse projects. I recently completed a role as an Automation Analyst Co-op at Royal
							Bank of Canada, where I developed a web application to streamline testing processes. Previously, I worked as a Software
							Developer Co-op at AMD, focusing on optimizing driver performance. I’ve also supported fellow students as a Teaching
							Assistant. <br />
							<br />
							I’m currently exploring post-graduation opportunities and am excited about the next steps in my career. <br />
							<br />
							In my free time, I enjoy gaming, swimming, and exploring new coding projects. I’m always eager to learn and tackle new
							challenges, and I strive to approach problems with creativity and a positive mindset.
						</div>
					</div>
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
								<li className={classes.skill}>Node.js</li>
								<li className={classes.skill}>C++</li>
								<li className={classes.skill}>Jenkins</li>
								<li className={classes.skill}>Jira</li>
								<li className={classes.skill}>PostGreSQL</li>
							</ul>
						</div>
					</div>
				</section>
				<div className={classes.divider}></div>
				<section className={classes.experience} id="experience">
					<h1>Experience</h1>
					<div className={classes.experience__content}>
						<Project
							image={rbc}
							title="Royal Bank of Canada"
							desc="Took on the role of a Automation Analyst at RBC. Where my key resposibility was to develop a website that would 
							streamline Test data retrieval for the QA/QE Teams in my division."
							links={[
								{
									title: "Learn more",
									link: "https://www.linkedin.com/in/jadenxmathias/",
								},
							]}
						/>
						<Project
							image={amd}
							title="Advanced Micro Devices"
							desc="Worked at AMD as a Software Developer Co-op. I worked on the Power component of the AMD Driver, my contributions included: 
							Debugging driver defect tickets, Optimizing code performance, building tools that made it easier for system engineers to identify performance gaps,
							creating Automate test suites in Jenkins to minimize Bug reports in QA Testing cycles. I also got the oppurtunity
							of Implementing features in the driver for AI initiatives of next generation Ryzen Products."
							links={[{ title: "Learn more", link: "https://www.linkedin.com/in/jadenxmathias/" }]}
						/>
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
							links={[
								{
									title: "Try it",
									link: "https://drive.google.com/file/d/1ln-72otoXC8WHIqTOYPiizlUSWGlJ2AH/view?usp=sharing",
								},
							]}
						/>
						<Project
							image={pong}
							title="3D Neon Pong"
							desc="3D Neon Pong is a game inspired by the all time classic game: Pong.
					However, this game comes with a twist, where the landscape is three
					dimensional instead of two, making it much more challenging and fun. It
					was made using Unity and programmed in C#. You can try the game or
					download it with the link below!"
							links={[{ title: "Try it", link: "https://jmapps.itch.io/neon-3d-pong" }]}
						/>
						<Project
							image={mathbot}
							title="Discord Math Bot"
							desc="Discord Math bot is a bot that can be used in your discord server. The
					main feature of this bot is that it can derivate mathematical equations.
					The bot was made in Python and was achieved by programming a
					interpreter. You can check out the code in the link below!"
							links={[
								{
									title: "Try it",
									link: "https://github.com/JadenMathias/Discord_math_bot",
								},
							]}
						/>
						<Project
							image={findr}
							title="Findr"
							desc="Findr is an app that makes job search easy! The main idea is that
					applying is as easy as swiping left or right. The app was developed
					during a Hackathon and is still in the early stages. The app was
					developed using Flutter and programmed in Dart. Check out the demo in
					the link below!"
							links={[
								{
									title: "Try it",
									link: "https://devpost.com/software/findr-u6ovgb",
								},
							]}
						/>
					</div>
				</section>
				<div className={classes.divider}></div>
				<section className={classes.education} id="edu">
					<h1>Education</h1>
					<div className={classes.education__content}>
						<img src={mcmaster} alt="Logo" className={classes.education__img} />
						<p>
							2020 - 2025<br></br>B.A.Sc Computer Science
						</p>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default Home;
