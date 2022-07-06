import * as React from "react";

import classes from "./Typer.module.scss";

const Typer = (props) => {
	const words = props.text;
	const size = props.size;
	const [index, setIndex] = React.useState(0);
	const [subIndex, setSubIndex] = React.useState(0);
	const [reverse, setReverse] = React.useState(false);

	// typeWriter
	React.useEffect(() => {
		if (index === words.length - 1 && subIndex === words[index].length) {
			return;
		}

		if (subIndex === words[index].length + 1 && index !== words.length - 1 && !reverse) {
			setReverse(true);
			return;
		}

		if (subIndex === 0 && reverse) {
			setReverse(false);
			setIndex((prev) => prev + 1);
			return;
		}

		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + (reverse ? -1 : 1));
		}, Math.max(reverse ? 75 : subIndex === words[index].length ? 100 : 50, parseInt(Math.random() * 200)));

		return () => clearTimeout(timeout);
	}, [subIndex, index, reverse]);

	return (
		<>
			<div className={classes.text} style={{ fontSize: `${size}rem` }}>
				{"> "}
				{`${words[index].substring(0, subIndex)}`}
			</div>
		</>
	);
};

export default Typer;
