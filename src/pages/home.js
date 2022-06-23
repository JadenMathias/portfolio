import * as React from "react";
import Typer from "../components/typer";
import classes from "./Home.module.scss";
const Home = () => {
	return (
		<div className={classes.mainContainer}>
			<Typer text={["Welcome to my website!"]} size={3} />
		</div>
	);
};

export default Home;
